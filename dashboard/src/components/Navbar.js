import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Navbar = ({ onLogout, userData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* 🔹 Left Links */}
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/holdings">Holdings</Link>
        <Link to="/positions">Positions</Link>
        <Link to="/funds">Funds</Link>
        <Link to="/apps">Apps</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
