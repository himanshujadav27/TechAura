import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import aboutTech from "../assets/images/about-tech.png";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left side: Brand introduction */}
          <div className="col-lg-6">
            <p className="about-label">ABOUT TECHAURA</p>

            <h2 className="about-title">
              Technology that makes
              <span> life better.</span>
            </h2>

            <p className="about-description">
              At TechAura, we believe technology should make everyday
              life simpler, smarter, and more enjoyable. We bring
              together modern design, useful features, and reliable
              quality to create products you'll love using.
            </p>

            <p className="about-description">
              From immersive audio to smart wearables and everyday
              essentials, our goal is to help you experience more
              through technology.
            </p>

            <Link to="/products" className="btn about-button">
              Explore Our Products
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          {/* Right side: Visual */}
          <div className="col-lg-6">
            <div className="about-visual">
              <div className="about-glow"></div>

              <img
                src={aboutTech}
                alt="Modern TechAura technology products"
                className="about-image"
              />

              <div className="about-floating-card">
                <div className="about-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <div>
                  <h6>Innovation First</h6>
                  <p>Technology with purpose</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission and vision */}
        <div className="row g-4 about-values">
          <div className="col-md-6">
            <div className="value-card">
              <div className="value-icon">
                <i className="bi bi-bullseye"></i>
              </div>
              <h4>Our Mission</h4>
              <p>
                To make useful, dependable, and thoughtfully designed
                technology accessible for everyday life.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="value-card">
              <div className="value-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h4>Our Vision</h4>
              <p>
                To build a brand people trust for modern technology,
                meaningful innovation, and a better digital lifestyle.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
