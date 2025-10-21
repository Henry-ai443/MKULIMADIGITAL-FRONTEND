import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Auth.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // spinner control
  const [success, setSuccess] = useState(false); // success bar control

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch("https://mkulimadigital-backend.onrender.com/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.detail || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      setSuccess(true);
      setLoading(false);

      // Remove success bar after 3 seconds and navigate to /home
      setTimeout(() => {
        setSuccess(false);
        navigate("/home");
      }, 3000);

    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        {/* Added LOGIN TO text */}
        <h3 className="login-to-title">LOGIN TO:</h3>
        <h2 className="auth-title">Terra Smart</h2>

        {/* Success bar */}
        {success && <div className="success-bar">Login successful</div>}

        {/* Error message */}
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            className="form-control mb"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            className="form-control mb"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button
            className="btn-primary full-width"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
              
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p style={{ marginTop: '1.2rem', fontSize: '0.95rem', color: '#333' }}>
          Don’t have an account?{" "}
          <a href="/register" style={{ color: '#2a7a2a', fontWeight: '600' }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
