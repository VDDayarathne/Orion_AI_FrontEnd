import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful! Redirecting...");
        localStorage.setItem("token", data.access); // Store token if using JWT
        setTimeout(() => (window.location.href = "/home"), 2000); // Redirect after login
      } else {
        setError(data.error || "Invalid username or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <button className="login-tab1">Login</button>
          <button className="register-tab1" onClick={() => window.location.href='/Register'}>Register</button>
        </div>
        <h2>WELCOME BACK!!</h2>
        <p>We are Happy to See You Again.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">YOUR USERNAME</label>
          <div className="input-with-icon">
            <input 
              id="username" 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <label htmlFor="password">YOUR PASSWORD</label>
          <div className="input-with-icon">
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
              className={isPasswordValid === false ? 'input-error' : ''} 
            />
            {isPasswordValid === false && <div className="error-icon">❌</div>}
          </div>
          {passwordError && <p className="error-text">{passwordError}</p>}

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              REMEMBER ME
            </label>
            <a href="#" className="forgot-password">FORGOT YOUR PASSWORD? Click here</a>
          </div>
          <button type="submit">LOGIN TO YOUR ACCOUNT</button>
        </form>
        <p className="register-link1">
          DON'T HAVE AN ACCOUNT? <a className="register-link1" onClick={() => window.location.href='/Register'}> Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;