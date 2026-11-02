
import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-heading text-center">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>Let's talk <span>technology.</span></h2>
          <p>
            Have a question about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Contact information */}
          <div className="col-lg-5">
            <div className="contact-info-panel">
              <h3>Contact Information</h3>
              <p className="contact-info-intro">
                Reach out to us. Our team will be happy to help you.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h6>Email us</h6>
                  <p>hello@techaura.example</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h6>Call us</h6>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h6>Our location</h6>
                  <p>Rajkot, Gujarat, India</p>
                </div>
              </div>

              <div className="contact-socials">
                <a href="https://www.instagram.com/" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="col-lg-7">
            <div className="contact-form-panel">
              <h3>Send us a message</h3>

              {submitted && (
                <div className="alert alert-success" role="status">
                  Demo submitted successfully! No message has been sent to a
                  server yet.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-name">Your name</label>
                    <input
                      id="contact-name"
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email">Email address</label>
                    <input
                      id="contact-email"
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      className="form-control"
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="contact-submit-btn">
                      Send Message
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
