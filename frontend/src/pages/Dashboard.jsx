import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationCard from "../components/ApplicationCard";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      company: "Creative Agency",
      position: "UI/UX Designer",
      status: "Applied",
      date: "2024-07-18",
    },
    {
      id: 2,
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      status: "Applied",
      date: "2024-07-15",
    },
    {
      id: 3,
      company: "Innovate Hub",
      position: "Full Stack Engineer",
      status: "Interview",
      date: "2024-07-10",
    },
    {
      id: 4,
      company: "Data Corp",
      position: "Data Analyst",
      status: "Offer",
      date: "2024-06-20",
    },
    {
      id: 5,
      company: "Biz Group",
      position: "Project Manager",
      status: "Rejected",
      date: "2024-05-01",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Job Applications Dashboard</h1>
        <p className="text-gray-500 mt-1">Track and manage all your job applications efficiently.</p>
      </div>

      {/* Filters and Add Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:w-4/5">
          <div className="relative">
            <FiSearch className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search company or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm"
          >
            <option value="">All Statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
          <input type="date" className="px-4 py-2 border rounded-md shadow-sm" />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm"
          >
            <option value="asc">Date: Ascending</option>
            <option value="desc">Date: Descending</option>
          </select>
        </div>

        <button
          className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-800"
          onClick={() => navigate("/add-application")}
        >
          + Add New Application
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((app) => (
          <ApplicationCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
export default Dashboard;
