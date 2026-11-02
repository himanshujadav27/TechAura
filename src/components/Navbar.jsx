import React from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg tech-navbar">
      <div className="container-fluid px-lg-5">
        {/* Brand Logo */}
        <Link className="navbar-brand tech-brand" to="/">
          <span className="brand-symbol">A</span>
          <span>TechAura</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#techNavbar"
          aria-controls="techNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="techNavbar">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="navbar-actions">
            <button className="nav-icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </button>

            <button
              className="nav-icon-btn cart-btn"
              aria-label="Shopping cart"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.5L21 8H6" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </button>

            <Link to="/products" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
