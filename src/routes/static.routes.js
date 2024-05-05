import express from "express";
import Url from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allUrls = await Url.find({ createdBy: req.user._id });
  res.render("index", { urls: allUrls });
});

router.get("/signup", (req, res) => {
  res.render("Signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
