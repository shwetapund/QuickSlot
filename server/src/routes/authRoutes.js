import express from "express";
import { registerApi, loginApi, refreshTokenHandler } from "./../controllers/authController.js";

const router = express.Router();

router.post("/register", registerApi);
router.post("/login", loginApi);
router.post("/refresh", refreshTokenHandler);

export default router;
