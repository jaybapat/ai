import { MODELS } from "./_models.js";

const ALLOWED_ORIGIN = "https://jaybapat.github.io";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  res.status(200).json({ models: MODELS });
}