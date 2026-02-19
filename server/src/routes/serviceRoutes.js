import express from "express";
import {
  addService,
  getservices,
  getservicesbyid,
  deleteservice,
} from "./../controllers/serviceController.js";
import { verifyToken, isAdmin } from "./../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", verifyToken, isAdmin, addService);
router.get("/", getservices);
router.get("/:_id", getservicesbyid);
router.delete("/:id", deleteservice);

export default router;
