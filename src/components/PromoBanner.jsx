import React from "react";
import "../styles/PromoBanner.css";
import { Link } from "react-router-dom";
import auraHeadPhones from "../assets/images/promo-headphones.png";


function PromoBanner() {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-banner">
          <div className="row align-items-center">
            {/* Left: Promotional Content */}
            <div className="col-lg-7 promo-content">
              <p className="promo-eyebrow">
                LIMITED TIME OFFER
              </p>

              <h2>
                Upgrade Your
                <br />
                <span>Tech Lifestyle</span>
              </h2>

              <p className="promo-description">
                Experience innovation like never before.
                Discover premium technology designed
                for the way you live.
              </p>

              <Link to="/products" className="promo-button">
                Shop Collection <span>→</span>
              </Link>
            </div>

            {/* Right: Product Image */}
            <div className="col-lg-5 promo-visual">
              <div className="promo-image-glow"></div>

              <img
                src={auraHeadPhones}
                alt="Premium TechAura headphones"
                className="promo-product-image"
                loading="lazy"
              />

              <div className="promo-floating-label">
                <span className="promo-dot"></span>
                Designed for you
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
