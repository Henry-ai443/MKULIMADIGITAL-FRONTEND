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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://mkulimadigital-backend.onrender.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const isJson = response.headers.get('content-type')?.includes('application/json');

      if (!response.ok) {
        if (isJson) {
          const errorData = await response.json();
          const fieldErrors = Object.entries(errorData)
            .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
            .join('\n');
          setError(fieldErrors || 'Registration failed. Please try again.');
        } else {
          const text = await response.text();
          setError(text || 'Registration failed. Please try again.');
        }
        setLoading(false);
        return;
      }

      const data = isJson ? await response.json() : {};

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError('Registration succeeded, but no token received.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Unable to connect. Please check your network or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        <h2 className="auth-title">Create an Account</h2>
        
        {error && (
          <ul style={{ color: 'red', marginBottom: '1rem' }}>
            {error.split('\n').map((errMsg, idx) => (
              <li key={idx}>{errMsg}</li>
            ))}
          </ul>
        )}
        
        <form onSubmit={handleSubmit}>
          <input
            value={form.username}
            type="text"
            name="username"
            className="form-control mb"
            placeholder="Username"
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            value={form.email}
            type="email"
            name="email"
            className="form-control mb"
            placeholder="Email"
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            value={form.password}
            type="password"
            name="password"
            className="form-control mb"
            placeholder="Password"
            onChange={handleChange}
            required
            disabled={loading}
          />
          <h4>Select Role:</h4>
          <select
            value={form.role}
            name="role"
            className="form-control mb"
            onChange={handleChange}
            disabled={loading}
          >
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
            <option value="retailer">Retailer</option>
          </select>
          <button className="btn-primary full-width" type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
