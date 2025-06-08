import express from "express";
import multer from "multer";
import {analyzeResume} from "../controllers/analysisController.js";

const router = express.Router();

const upload = multer({dest: "uploads/"}); // Temporary upload folder

router.post("/resume", upload.single("resume"), analyzeResume);

export default router;
