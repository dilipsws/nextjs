"use client"
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

      try {
        const response = await  axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
        })

        console.log('User login successfully:', response.data.message);
        console.log('User login successfully:', response.data.token);
        console.log('User login successfully:', response.data.user);
        localStorage.setItem('keyid', response.data.token)
        router.push('/');
        
      } catch (error) {
          const errorMessages = [];
        // console.log(error);
          if (error.response?.data?.error?.password) {
            errorMessages.push(error.response.data.error.password[0]);
          }

          if (error.response?.data?.error == 'Invalid credentials.') {
            errorMessages.push(error.response.data.error);
          }
          if (error.response?.data?.error?.email) {
              errorMessages.push(error.response.data.error.email[0]);
          }
          setError(errorMessages.join(''));
        
      }

  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          
          {/* Error message */}
          {error && <div className="alert alert-info">{error}</div>}

          <form onSubmit={handleSubmit}>
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

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
