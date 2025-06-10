import React from "react";

export const FeedbackCard = ({file, isAnalyzing, feedback}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col text-center relative min-h-[200px]">
      <h2 className="text-lg font-semibold mb-4">
        Feedback for {file ? file.name : "Resume"}
      </h2>

      {isAnalyzing ? (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-60 flex items-center justify-center animate-pulse rounded-lg">
          <p className="text-gray-400">Analyzing...</p>
        </div>
      ) : feedback ? (
        <div className="text-gray-700 text-left">{feedback}</div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-gray-500">
          <svg
            className="w-12 h-12 text-blue-400 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
            />
          </svg>
          <p>No feedback available yet. Please perform an analysis.</p>
        </div>
      )}
    </div>
  );
};
