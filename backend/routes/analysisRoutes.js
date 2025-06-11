import express from "express";
import multer from "multer";
import { analyzeResume } from "../controllers/analysisController.js";
import { jdGuidance } from "../controllers/jdGuidanceController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Folder for temporary resume uploads

// Resume-only analysis
router.post("/resume", upload.single("resume"), analyzeResume);

// JD-guided resume analysis (expects: resume file + jobDescription string)
router.post("/jd", upload.single("resume"), jdGuidance);

export default router;
