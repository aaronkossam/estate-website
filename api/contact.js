const recipient = "makonadu1997@gmail.com";
const limits = { name: 120, email: 254, phone: 50, service: 120, location: 200, message: 5000 };

// Node serverless handler (Vercel). Keep provider credentials on the server.
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  if (!req.headers["content-type"]?.includes("application/json")) {
    return res.status(415).json({ error: "Please submit JSON." });
  }
  const origin = req.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.host) return res.status(403).json({ error: "Invalid request origin." });
    } catch {
      return res.status(403).json({ error: "Invalid request origin." });
    }
  }
  let input;
  try {
    input = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid request." });
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) return res.status(400).json({ error: "Invalid request." });
  // Hidden honeypot field; never send bot submissions to the provider.
  if (input.website) return res.status(200).json({ success: true });
  const fields = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > limit) return res.status(400).json({ error: "One or more fields are too long or invalid." });
    fields[key] = value.trim();
  }
  if (!fields.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.email + fields.name + fields.service) || !fields.message) {
    return res.status(400).json({ error: "Please enter your name, a valid email address and a message." });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return res.status(503).json({ error: "Email sending is temporarily unavailable. Please use the email link below." });
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [recipient],
        reply_to: fields.email,
        subject: `Website enquiry: ${fields.service || "General enquiry"}`,
        text: `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone || "Not provided"}\nService: ${fields.service || "General enquiry"}\nLocation: ${fields.location || "Not provided"}\n\n${fields.message}`,
      }),
    });
    if (!response.ok) throw new Error("Provider rejected enquiry");
    const result = await response.json();
    if (!result.id) throw new Error("Missing provider confirmation");
    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({ error: "We could not send your enquiry. Please try again or use the email link below." });
  }
}
