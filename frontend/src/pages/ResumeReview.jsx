import {FeedbackCard} from "../components/FeedbackCard";
import {UploadCard} from "../components/UploadCard";
import {useState} from "react";


export default function ResumeReview() {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          AI Resume Review
        </h1>
        <p className="text-gray-500">
          Upload your resume to get AI-powered feedback on its strengths, areas
          for improvement, and key skills to highlight.
        </p>
        <hr className="mt-4 border-gray-300" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Card */}
        <UploadCard
          file={file}
          setFile={setFile}
          isAnalyzing={isAnalyzing}
          setIsAnalyzing={setIsAnalyzing}
          setFeedback={setFeedback}
        />

        {/* Feedback Card */}
        <FeedbackCard
          file={file}
          isAnalyzing={isAnalyzing}
          feedback={feedback}
        />
      </div>
    </div>
  );
}
