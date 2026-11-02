import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tech-footer">
      <div className="container">
        <div className="row g-5 footer-main">
          {/* Brand information */}
          <div className="col-lg-4 col-md-6">
            <Link to="Home" className="footer-brand">
              <span className="footer-logo">
                <i className="bi bi-lightning-charge-fill"></i>
              </span>
              <span>
                Tech<span>Aura</span>
              </span>
            </Link>

            <p className="footer-description">
              Smart technology. Thoughtful design. Better everyday experiences.
              Discover technology designed to move with you.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Product categories */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Categories</h5>
            <ul className="footer-links">
              <li>
                <Link to="/products">Wireless Earbuds</Link>
              </li>
              <li>
                <Link to="/products">Smart Watches</Link>
              </li>
              <li>
                <Link to="/products">Headphones</Link>
              </li>
              <li>
                <Link to="/products">Power Banks</Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Get in Touch</h5>

            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt"></i>
                <span>Rajkot, Gujarat, India</span>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <span>hello@techaura.example</span>
              </li>
            </ul>

            <Link to="/contact" className="footer-contact-link">
              Contact our team
              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer-bottom">
          <p>© {currentYear} TechAura. All rights reserved.</p>

          <a href="#" className="back-to-top">
            Back to top
            <i className="bi bi-arrow-up ms-2"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
