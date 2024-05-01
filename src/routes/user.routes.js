import express from "express";
import { userSignup } from "../controllers/user.contoller.js";

const router = express.Router();

router.post("/", userSignup);

export default router;
