import express from "express";
import Url from "../models/url.model.js";
import { restrictTo } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allUrls = await Url.find({ createdBy: req.user._id });
  res.render("index", { urls: allUrls });
});

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await Url.find({});
  res.render("index", { urls: allUrls });
});

router.get("/signup", (req, res) => {
  res.render("Signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
