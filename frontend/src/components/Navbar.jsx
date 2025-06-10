import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {
  FiHome,
  FiPlus,
  FiFileText,
  FiSearch,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import {useAuth} from "../context/AuthContext";

export const Navbar = () => {
  const {setAuthenticated} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include", // send cookies to backend
      });

      if (response.ok) {
        setAuthenticated(false);
        navigate("/");
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const navLinks = [
    {name: "Dashboard", path: "/dashboard", icon: <FiHome />},
    {name: "Add Application", path: "/add-application", icon: <FiPlus />},
    {name: "Resume Review", path: "/resume-review", icon: <FiFileText />},
    {name: "JD Guidance", path: "/jd-guidance", icon: <FiSearch />},
    {name: "Profile", path: "/profile", icon: <FiUser />},
  ];

  return (
    <nav className="bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Logo / App Name */}
      <div
        onClick={() => navigate("/dashboard")}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14v8H5z"
          />
        </svg>
        <span className="font-bold text-xl text-gray-900">
          Career<span className="font-light">Compass</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({isActive}) =>
              `flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 px-3 py-1 text-red-600 hover:text-red-800 text-sm font-medium"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};
