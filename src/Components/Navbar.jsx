import React, { useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking a link (mobile UX)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-glass sticky-top">
      <div className="container">
        <a href="#" className="brand">
          Mkulima Digital
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="/" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="/farmer-dashboard" onClick={handleLinkClick}>
                Farmer Dashboard
              </a>
            </li>
            <li>
              <a href="/customer-dashboard" onClick={handleLinkClick}>
                Customer Dashboard
              </a>
            </li>
            <li>
              <a href="/login" onClick={handleLinkClick}>
                Login
              </a>
            </li>
            <li>
              <a href="/register" onClick={handleLinkClick}>
                Register
              </a>
            </li>
          </ul>
        </div>
        {/* Desktop menu */}
        <ul className="desktop-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/farmer-dashboard">Farmer Dashboard</a>
          </li>
          <li>
            <a href="/customer-dashboard">Customer Dashboard</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
