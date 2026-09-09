// Receives lead submissions from the contact form and the AI Growth Score
// form, and forwards them to the Google Apps Script Web App that appends a
// row to the "Website (Inloop)" tab. The Apps Script URL stays server-side
// (GOOGLE_SHEETS_WEBHOOK_URL in .env.local) so it's never in the client bundle.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('GOOGLE_SHEETS_WEBHOOK_URL is not set — see GOOGLE_SHEETS_SETUP for how to add it.');
    return res.status(500).json({ ok: false, error: 'Lead intake is not configured yet.' });
  }

  const body = req.body || {};
  if (!body.email) {
    return res.status(400).json({ ok: false, error: 'Missing email.' });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const result = await upstream.json().catch(() => ({ ok: upstream.ok }));
    if (!upstream.ok || result.ok === false) {
      console.error('Google Sheets webhook error:', result);
      return res.status(502).json({ ok: false, error: 'Could not reach the lead sheet.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to forward lead:', err);
    return res.status(502).json({ ok: false, error: 'Could not reach the lead sheet.' });
  }
}
