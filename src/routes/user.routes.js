import express from "express";
import { userSignup, userLogin } from "../controllers/user.contoller.js";

const router = express.Router();

router.post("/", userSignup);
router.post("/login", userLogin);
export default router;
