import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import { LuBriefcase } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard",  },
    { name: "Add Application", path: "/add-application" },
    { name: "JD Guidance", path: "/jd-guidance" },
    { name: "Resume Review", path: "/resume-review" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <LuBriefcase className="text-blue-600 text-2xl" />
            <Link to="/dashboard" className="text-xl font-bold text-blue-600">CareerCompass</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      pathname === link.path
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-md bg-white shadow-lg py-2 px-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-all duration-200
                  ${
                    pathname === link.path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
