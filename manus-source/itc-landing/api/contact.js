// Vercel serverless function — contact form handler
// Sends one email to jeff@itc.eco + scott@itc.eco via Gmail API OAuth2.

function encodeBase64Url(value) {
  return Buffer.from(value, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GMAIL_CLIENT_ID || "",
      client_secret: process.env.GMAIL_CLIENT_SECRET || "",
      refresh_token: process.env.GMAIL_REFRESH_TOKEN || "",
      grant_type: "refresh_token",
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.access_token) {
    throw new Error(`Gmail token refresh failed (${response.status})`);
  }
  return result.access_token;
}

function buildMessage({ name, email, phone, interest, message }) {
  const safeName = sanitizeHeader(name);
  const safeEmail = sanitizeHeader(email);
  const safeInterest = sanitizeHeader(interest);
  const subject = `ITC Contact: ${safeName}${safeInterest ? ` — ${safeInterest}` : ""}`;
  const text = [
    "New contact form submission via itc.eco",
    "",
    `Name:     ${safeName}`,
    `Email:    ${safeEmail}`,
    `Phone:    ${phone || "Not provided"}`,
    `Interest: ${interest || "Not specified"}`,
    "",
    "Message:",
    "────────────────────────────",
    message,
    "────────────────────────────",
    "",
    `Reply to this email to respond to ${safeName}. Jeff and Scott are both included on the original message.`,
  ].join("\n");

  return [
    "From: ITC Website <scott@itc.eco>",
    "To: Jeff Streck <jeff@itc.eco>, Scott Ensminger <scott@itc.eco>",
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    text,
  ].join("\r\n");
}

export default async function handler(req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    let payload = req.body;
    if (typeof payload === "string") {
      try {
        payload = JSON.parse(payload);
      } catch {
        return res.status(400).json({ error: "Invalid JSON" });
      }
    }

    const { name, email, phone, interest, message } = payload || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const accessToken = await getAccessToken();
    const gmailResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: encodeBase64Url(buildMessage({ name, email, phone, interest, message })),
      }),
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      console.error("Gmail send failed", gmailResponse.status, errorText);
      return res.status(502).json({ error: "Email delivery failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact handler failed", error);
    return res.status(500).json({ error: "Server error" });
  }
}
