// src/ContactMe.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/contactme.css";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Reset error message before submission
    setError("");

    try {
      await toast.promise(
        axios.post(`${process.env.REACT_APP_API}/send-email`, {
          ...formData,
        }),
        {
          loading: "Sending...",
          success: (response) => {
            if (response.status === 200) {
              setSubmitted(true);
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                honey: "",
              });
              return "Message sent successfully!";
            } else {
              throw new Error("Failed to send message.");
            }
          },
          error: (err) => {
            setError(
              err.response?.data ||
                "Failed to send message. Please try again later."
            );
            return "Message not sent.";
          },
        }
      );
    } catch (err) {
      setError(
        err.response?.data || "Failed to send message. Please try again later."
      );
    }
  };

  return (
    <div className="contact-me" id="contact">
      <h2 className="contact-me__title">Contact Me</h2>
      {submitted && (
        <p className="contact-me__success-message">
          Thank you for your message! I'll get back to you soon.
        </p>
      )}
      {error && <p className="contact-me__error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="contact-me__form">
        <div className="contact-me__form-group">
          <label htmlFor="name" className="contact-me__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-me__input"
          />
        </div>
        <div className="contact-me__form-group">
          <label htmlFor="email" className="contact-me__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-me__input"
          />
        </div>
        <div className="contact-me__form-group">
          <label htmlFor="subject" className="contact-me__label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-me__input"
          />
        </div>
        <div className="contact-me__form-group">
          <label htmlFor="message" className="contact-me__label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-me__textarea"
          ></textarea>
        </div>

        <input type="text" name="honey" style={{ display: "none" }} />
        <button type="submit" className="contact-me__button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
