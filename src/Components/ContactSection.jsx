import React, { useState } from "react";
import '../Styles/ContactSection.css'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Simulate form submission (replace with real API call if needed)
    console.log("Form submitted:", formData);
    setStatus("✅ Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <h2 className="text-center mb-4 display-5 fw-bold">Contact Us</h2>
      <p className="text-center mb-5 lead">
        Have questions or need support? We're here to help!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </div>

            {status && (
              <div
                className={`alert mt-3 ${
                  status.startsWith("✅") ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
