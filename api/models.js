import { MODELS } from "./_models.js";

export default function handler(req, res) {
  res.status(200).json({ models: MODELS });
}