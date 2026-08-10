// Vercel serverless function — contact form handler
// Sends one email to jeff@itc.eco + scott@itc.eco via Gmail API OAuth2

const https = require('https');

function post(hostname, path, headers, body) {
  return new Promise((resolve, reject) => {
    const data = typeof body === 'string' ? body : JSON.stringify(body);
    const req = https.request(
      { hostname, path, method: 'POST', headers: { ...headers, 'Content-Length': Buffer.byteLength(data) } },
      (res) => {
        let raw = '';
        res.on('data', c => raw += c);
        res.on('end', () => resolve({ status: res.statusCode, body: raw }));
      }
    );
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id:     process.env.GMAIL_CLIENT_ID,
    client_secret: process.env.GMAIL_CLIENT_SECRET,
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    grant_type:    'refresh_token',
  });
  const res = await post(
    'oauth2.googleapis.com',
    '/token',
    { 'Content-Type': 'application/x-www-form-urlencoded' },
    params.toString()
  );
  const json = JSON.parse(res.body);
  if (!json.access_token) throw new Error('Token refresh failed: ' + res.body);
  return json.access_token;
}

function buildRaw(from, to, subject, text) {
  const msg = [
    `From: ITC Website <${from}>`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=UTF-8`,
    ``,
    text,
  ].join('\r\n');
  return Buffer.from(msg).toString('base64url');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, interest, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const subject = `ITC Contact: ${name}${interest ? ` — ${interest}` : ''}`;
  const body = [
    `New contact form submission via itc.eco`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || 'Not provided'}`,
    `Interest: ${interest || 'Not specified'}`,
    ``,
    `Message:`,
    `────────────────────────────`,
    message,
    `────────────────────────────`,
    ``,
    `Reply directly to this email to respond to ${name}.`,
  ].join('\n');

  try {
    const token = await getAccessToken();
    const raw   = buildRaw(
      'scott@itc.eco',
      'jeff@itc.eco, scott@itc.eco',
      subject,
      body
    );

    const send = await post(
      'gmail.googleapis.com',
      '/gmail/v1/users/me/messages/send',
      { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      JSON.stringify({ raw })
    );

    if (send.status < 200 || send.status >= 300) {
      console.error('Gmail error:', send.body);
      return res.status(500).json({ error: 'Failed to send' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};
