import React from "react";
import { FiCalendar, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdWork } from "react-icons/md";

const statusColors = {
  Applied: "bg-gray-200 text-gray-800",
  Interview: "bg-blue-100 text-blue-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const ApplicationCard = ({ id, position, company, status, date }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg p-5 flex flex-col justify-between h-full">
      <div>
        {/* Position */}
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{position}</h2>

        {/* Company */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MdWork className="mr-1" />
          {company}
        </div>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500">
          <FiCalendar className="mr-1" />
          Applied on: {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        {/* Status badge */}
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center">
            <FiEdit className="mr-1" />
            Edit
          </button>
          <button className="text-sm text-red-600 hover:text-red-800 flex items-center">
            <FiTrash2 className="mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
