import express from "express";
import healthApi from "./../controllers/healthController.js";

const router = express.Router();

router.get("/", healthApi);

export default router;
