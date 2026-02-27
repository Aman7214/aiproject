// api/poll.js

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const REPLICATE_TOKEN = process.env.REPLICATE_TOKEN;
  const { id } = req.query;

  const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: { "Authorization": `Bearer ${REPLICATE_TOKEN}` }
  });

  const data = await response.json();
  return res.status(200).json(data);
}
