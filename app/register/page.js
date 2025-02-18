"use client"
import { useState } from "react";
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async  (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await  axios.post('http://127.0.0.1:8000/api/home', {
          name,
          email,
          password,
      })
        
      console.log('User registered successfully:', response.data);
      // If the form is valid, we simulate a successful sign-up process
      setSuccess(true);
      setError("");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {

      const errorMessages = [];

        if (error.response.data.error.name) {
            errorMessages.push(error.response.data.error.name[0]);
        }
        if (error.response.data.error.password) {
            errorMessages.push(error.response.data.error.password[0]);
        }
        if (error.response.data.error.email) {
            errorMessages.push(error.response.data.error.email[0]);
        }

        // Set all error messages at once
        setError(errorMessages.join(''));
      
    }

  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>

              {/* Error and Success messages */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">Sign Up Successful!</div>}

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    
                  />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>

              <div className="mt-3 text-center">
                <p>Already have an account? <a href="/login">Login here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
