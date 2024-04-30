import { nanoid } from "nanoid";
import URL from "../models/url.js ";

async function handleGenerateShortUrl(req, res) {
  const body = req.body;
  console.log(body.url);
  if (!body.url) return res.status(400).json({ error: "Url is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateShortUrl, handleGetAnalytics };
