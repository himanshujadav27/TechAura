import React from "react";
import "../styles/Hero.css";
import heroEarbuds from "../assets/images/hero-earbuds.png";

function Hero() {
  const benefits = [
    {
      icon: "truck",
      title: "Free Shipping",
      description: "On orders over ₹999",
    },
    {
      icon: "shield-check",
      title: "Secure Payments",
      description: "100% secure checkout",
    },
    {
      icon: "headset",
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: "arrow-repeat",
      title: "Easy Returns",
      description: "Hassle-free returns",
    },
  ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-main container-fluid">
        <div className="row align-items-center">
          {/* Left: Hero Content */}
          <div className="col-lg-6 hero-content">
            <p className="hero-eyebrow">
              Innovate. Experience. Elevate.
            </p>

            <h1 className="hero-title">
              Tech<span>Aura</span>
            </h1>

            <h2 className="hero-subtitle">
              Smart Tech. Better Tomorrow.
            </h2>

            <p className="hero-description">
              Discover cutting-edge technology designed to
              <br className="d-none d-md-block" />
              make your life smarter, easier and more productive.
            </p>

            <div className="hero-buttons">
              <a href="/products" className="hero-btn-primary">
                Explore Products <span>→</span>
              </a>

              <a href="/about" className="hero-btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="col-lg-6 hero-visual">
            <div className="hero-glow-circle"></div>

            <img
              src={heroEarbuds}
              alt="Premium wireless earbuds by TechAura"
              className="hero-product-image"
            />
          </div>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="hero-benefits">
        <div className="container-fluid px-lg-5">
          <div className="row g-4">
            {benefits.map((benefit) => (
              <div className="col-6 col-lg-3" key={benefit.title}>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className={`bi bi-${benefit.icon}`}></i>
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
