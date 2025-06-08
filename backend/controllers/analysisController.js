import fs from "fs";
import mammoth from "mammoth";
import pdf from "pdf-parse";
import axios from "axios";

export const analyzeResume = async (req, res) => {
  try {
    console.log("Received request to analyze resume.");

    if (!req.file) {
      console.log("No file uploaded in the request.");
      return res.status(400).json({message: "No resume file uploaded"});
    }
    console.log("Resume file info:", req.file);

    const filePath = req.file.path;
    const jobDescription = req.body.jobDescription || "";
    console.log("Job description received:", jobDescription);

    let resumeText = "";

    // Extract text based on file type
    if (req.file.mimetype === "application/pdf") {
      console.log("Processing PDF resume.");
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdf(dataBuffer);
      resumeText = pdfData.text;
      console.log("Extracted text from PDF:", resumeText.substring(0, 200)); // log first 200 chars
    } else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      console.log("Processing DOCX resume.");
      const result = await mammoth.extractRawText({path: filePath});
      resumeText = result.value;
      console.log("Extracted text from DOCX:", resumeText.substring(0, 200)); // first 200 chars
    } else if (req.file.mimetype === "text/plain") {
      console.log("Processing plain text resume.");
      resumeText = fs.readFileSync(filePath, "utf8");
      console.log("Extracted text from TXT:", resumeText.substring(0, 200));
    } else {
      console.log("Unsupported file format:", req.file.mimetype);
      fs.unlinkSync(filePath);
      return res.status(400).json({message: "Unsupported file format"});
    }

    // Delete uploaded file
    fs.unlinkSync(filePath);
    console.log("Deleted the uploaded file.");

    // Prepare prompt for Hugging Face model
    const prompt = `Given the resume below and the job description, provide:

1. A compatibility score (0-100).
2. Suggestions to improve the resume for the job.

Resume:
${resumeText}

Job Description:
${jobDescription}

Response:
`;
    console.log(
      "Prompt prepared for Hugging Face API:",
      prompt.substring(0, 300)
    );

    // Call Hugging Face Inference API
    let hfRes;
    try {
      const hfRes = await axios.post(
        "https://api-inference.huggingface.co/models/google/flan-t5-base",
        {inputs: prompt},
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
          timeout: 20000,
        }
      );

      console.log("Hugging Face API response received.");
    } catch (apiErr) {
      console.error(
        "Error during Hugging Face API call:",
        apiErr?.response?.data || apiErr.message
      );
      return res.status(500).json({
        message: "Hugging Face API call failed",
        error: apiErr?.response?.data || apiErr.message,
      });
    }

    res.json({result: hfRes.data});
  } catch (err) {
    console.error("Unexpected error in analyzeResume:", err);
    res
      .status(500)
      .json({message: "Failed to analyze resume", error: err.message || err});
  }
};
