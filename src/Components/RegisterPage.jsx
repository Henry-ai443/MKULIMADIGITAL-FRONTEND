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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get('content-type');

      if (!response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          const messages = Object.entries(errorData)
            .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
            .join('\n');
          setError(messages || 'Registration failed. Please try again.');
        } else {
          setError('Server error occurred. Please try again later.');
        }
        setLoading(false);
        return;
      }

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        } else {
          setError('Unexpected server response.');
        }
      } else {
        setError('Unexpected server response.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Network error. Please check your connection.');
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
          <button
            className="btn-primary full-width"
            type="submit"
            disabled={loading}
            style={{ position: 'relative' }}
          >
            {loading ? (
              <>
                <span
                  className="spinner"
                  style={{
                    width: '16px',
                    height: '16px',
                    border: '3px solid rgba(255,255,255,0.3)',
                    borderTopColor: 'white',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 1s linear infinite',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                  }}
                />
                Registering...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>
      </div>

      {/* Spinner keyframes animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
