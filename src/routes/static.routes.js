import express from "express";
import Url from "../models/url.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await Url.find({});
  res.render("index", { urls: allUrls });
});

export default router;
