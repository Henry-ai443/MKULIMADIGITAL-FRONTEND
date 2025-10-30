import React, { useState } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => setMenuOpen(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem('email');
    navigate("/");
  };

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log(role)

  // Function to render the dashboard link based on role
// Inside Navbar component

const renderDashboardLink = () => {
  if (role === "farmer") {
    return (
      <li>
        <a href="/farmer-dashboard" onClick={handleLinkClick}>
          Farmer Dashboard
        </a>
      </li>
    );
  } else if (role === "retailer") {
    return (
      <li>
        <a href="/retailer-dashboard" onClick={handleLinkClick}>
          Retailer Dashboard
        </a>
      </li>
    );
  } else if (role === "customer") {
    return (
      <li>
        <a href="/customer-dashboard" onClick={handleLinkClick}>
          Customer Dashboard
        </a>
      </li>
    );
  } else {
    // Role missing or unrecognized - render all dashboard links
    return (
      <>
        <li>
          <a href="/farmer-dashboard" onClick={handleLinkClick}>
            Farmer Dashboard
          </a>
        </li>
        <li>
          <a href="/retailer-dashboard" onClick={handleLinkClick}>
            Retailer Dashboard
          </a>
        </li>
        <li>
          <a href="/customer-dashboard" onClick={handleLinkClick}>
            Customer Dashboard
          </a>
        </li>
      </>
    );
  }
};

  return (
    <nav className="navbar-glass sticky-top">
      <div className="container">
        <a href="#" className="brand">
          Terra Smart
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
            {token && (
              <li>
                <a href="/home" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
            )}

            {/* Dynamic Dashboard Link */}
            {token && renderDashboardLink()}

            {!token && (
              <li>
                <a href="/" onClick={handleLinkClick}>
                  Login
                </a>
              </li>
            )}

            {!token && (
              <li>
                <a href="/register" onClick={handleLinkClick}>
                  Register
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {token && (
            <li>
              <a href="/home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
          )}

          {/* Dynamic Dashboard Link */}
          {token && renderDashboardLink()}

          {!token && (
            <li>
              <a href="/" onClick={handleLinkClick}>
                Login
              </a>
            </li>
          )}

          {!token && (
            <li>
              <a href="/register" onClick={handleLinkClick}>
                Register
              </a>
            </li>
          )}

          {token && (
            <li>
              <a href="#" onClick={logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
