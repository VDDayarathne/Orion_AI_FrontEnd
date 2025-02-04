import React, { useState } from "react";
import './register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Registration successful! Please check your email.");
      } else {
        setError(data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };


  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-header">
          <button className="login-tab"onClick={() => window.location.href='/Login'}>Login</button>
          <button className="register-tab">Register</button>
        </div>
        <h2>REGISTER ACCOUNT</h2>
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
        <form onSubmit={handleSubmit}>

          <label htmlFor="username">USERNAME</label>
          <input id="username" name="username" type="text" required onChange={handleChange} />

          <label htmlFor="email">YOUR EMAIL</label>
          <input id="email" name="email" type="email" required onChange={handleChange} />

          <label htmlFor="first_name">FIRST NAME</label>
          <input id="first_name" name="first_name" type="text" required onChange={handleChange} />

          <label htmlFor="last_name">LAST NAME</label>
          <input id="last_name" name="last_name" type="text" required onChange={handleChange} />
          
          <label htmlFor="password">YOUR PASSWORD</label>
          <input id="password1" name="password1" type="password" required onChange={handleChange} />

          <label htmlFor="repeat-password">REPEAT PASSWORD</label>
          <input id="password2" name="password2" type="password" required onChange={handleChange} />

          <button type="submit">CREATE YOUR ACCOUNT</button>

        </form>
        
      </div>
    </div>
  );
};

export default Register;