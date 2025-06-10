import React from "react";

export const JobFitFeedbackCard = ({feedback, loading}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
      <h2 className="text-lg font-semibold mb-4">Job Fit Analysis</h2>

      {loading ? (
        <div className="animate-pulse text-gray-400">Analyzing...</div>
      ) : feedback ? (
        <p className="text-gray-700 whitespace-pre-line">{feedback}</p>
      ) : (
        <>
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
          <p className="text-gray-500">
            No feedback available yet. Please perform an analysis.
          </p>
        </>
      )}
    </div>
  );
};
