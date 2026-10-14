import { MODELS } from "./_models.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { model, messages } = req.body || {};

  if (!MODELS.includes(model)) {
    return res.status(400).json({ error: "Model not allowed" });
  }
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  try {
    const r = await fetch("https://ai.hackclub.com/proxy/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HACKCLUB_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model, messages }),
    });
    res.status(r.status).json(await r.json());
  } catch {
    res.status(502).json({ error: "Could not reach the AI service" });
  }
}