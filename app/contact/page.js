"use client"
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    // Simulating form submission success
    setSuccess(true);
    setError(""); // Clear any error message
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Contact Us</h3>

              {/* Error and Success messages */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">Message sent successfully!</div>}

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    placeholder="Enter your message"
                    
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
