import express from "express";
import Url from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await Url.find({});
  res.render("index", { urls: allUrls });
});

router.get("/signup", (req, res) => {
  res.render("Signup");
});

export default router;
