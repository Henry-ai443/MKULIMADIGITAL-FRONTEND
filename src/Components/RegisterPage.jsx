import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Auth.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://mkulimadigital-backend.onrender.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || 'Registration failed. Try again.');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Registration failed. Try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        <h2 className="auth-title">Create an Account</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            value={form.username}
            type="text"
            name="username"
            className="form-control mb"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            value={form.email}
            type="email"
            name="email"
            className="form-control mb"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            value={form.password}
            type="password"
            name="password"
            className="form-control mb"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <h4>Select Role:</h4>
          <select
            value={form.role}
            name="role"
            className="form-control mb"
            onChange={handleChange}
          >
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
            <option value="retailer">Retailer</option>
          </select>
          <button className="btn-primary full-width" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
