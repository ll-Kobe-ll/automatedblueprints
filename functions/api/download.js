// Cloudflare Pages Function: verified template delivery.
//
// Flow: Stripe Payment Link redirects the buyer to
//   /thank-you?session_id={CHECKOUT_SESSION_ID}
// The thank-you page calls this endpoint:
//   GET /api/download?session_id=cs_...&action=info  -> { product, name } JSON
//   GET /api/download?session_id=cs_...&action=file  -> streams the zip
//
// Which product to deliver comes ONLY from Stripe (payment link / session
// metadata `product`), never from a client-supplied param, so links cannot
// be forged. Requires two Cloudflare Pages settings:
//   - Environment variable STRIPE_SECRET_KEY (encrypted)
//   - R2 bucket binding named TEMPLATES containing <product>.zip files

const PRODUCTS = {
  'general-contractor':    'General Contractor Website Template',
  'restaurant':            'Restaurant Website Template',
  'hair-salon':            'Hair Salon Website Template',
  'dental-practice':       'Dental Practice Website Template',
  'hardware-store':        'Hardware Store Website Template',
  'machine-shop':          'Machine Shop Website Template',
  'fitness-studio':        'Fitness Studio Website Template',
  'real-estate':           'Real Estate Website Template',
  'professional-services': 'Professional Services Website Template',
  'all-nine':              'The Agency Bundle (All Nine Templates)',
};

const MAX_SESSION_AGE_DAYS = 30;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const sessionId = url.searchParams.get('session_id') || '';
  const action = url.searchParams.get('action') || 'info';

  if (!/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId)) {
    return json(400, { error: 'missing_session', message: 'No valid checkout session was provided.' });
  }
  if (!env.STRIPE_SECRET_KEY) {
    return json(500, { error: 'not_configured', message: 'Delivery is not configured yet. Email us and we will send your files directly.' });
  }

  // Verify the session with Stripe. Expand payment_link so metadata set on the
  // Payment Link works even if it was not copied onto the session.
  const stripeRes = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sessionId}?expand[]=payment_link`,
    { headers: { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}` } }
  );
  if (!stripeRes.ok) {
    return json(404, { error: 'session_not_found', message: 'We could not find that purchase. Check the link from your receipt, or email us.' });
  }
  const session = await stripeRes.json();

  if (session.payment_status !== 'paid') {
    return json(403, { error: 'not_paid', message: 'This purchase has not completed. If you were charged, email us and we will sort it out.' });
  }

  const ageDays = (Date.now() / 1000 - session.created) / 86400;
  if (ageDays > MAX_SESSION_AGE_DAYS) {
    return json(410, { error: 'expired', message: 'This download link has expired. Email us with your receipt and we will resend your files.' });
  }

  const product = session.metadata?.product || session.payment_link?.metadata?.product || '';
  if (!PRODUCTS[product]) {
    return json(422, { error: 'unknown_product', message: 'We could not match this purchase to a template. Email us and we will send it manually.' });
  }

  if (action === 'info') {
    return json(200, { product, name: PRODUCTS[product] });
  }

  // action=file: stream the zip from R2
  if (!env.TEMPLATES) {
    return json(500, { error: 'not_configured', message: 'File storage is not connected yet. Email us and we will send your files directly.' });
  }
  const object = await env.TEMPLATES.get(`${product}.zip`);
  if (!object) {
    return json(500, { error: 'file_missing', message: 'The file is temporarily unavailable. Email us and we will send it directly.' });
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${product}-website-template.zip"`,
      'Content-Length': object.size,
      'Cache-Control': 'no-store',
    },
  });
}
