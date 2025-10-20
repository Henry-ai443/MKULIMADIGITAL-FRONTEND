import React, { useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => setMenuOpen(false);

  //TOKEN and ROLE MIDDLEWARE
  const token = localStorage.getItem("token");

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
            {token &&
              <li>
              <a href="/home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            }
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
            {!token &&
                        <li>
              <a href="/" onClick={handleLinkClick}>
              Login
              </a>
            </li>
            }

            {!token && 
              <li>
              <a href="/register" onClick={handleLinkClick}>
                Register
              </a>
            </li>
            }
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
            {token &&
              <li>
              <a href="/home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            }
          <li>
            <a href="/farmer-dashboard">Farmer Dashboard</a>
          </li>
          <li>
            <a href="/customer-dashboard">Customer Dashboard</a>
          </li>

            {!token &&
              <li>
                <a href="/" onClick={handleLinkClick}>
                  Login
              </a>
            </li>
            }

            {!token && 
              <li>
              <a href="/register" onClick={handleLinkClick}>
                Register
              </a>
            </li>
            }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
