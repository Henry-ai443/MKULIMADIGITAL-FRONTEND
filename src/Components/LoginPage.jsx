import React , {useState}from "react";
import './Auth.css';
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const res = await axios.post('auth/login/', credentials);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            navigate('/dahsboard')
        }catch(err){
            setError('Login failed. Check credentials.');
        }
    };
    return (
        <div className="auth-container">
            <div className="auth-card fade-in">
                <h2 className="auth-title">Welcome Back</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" className="form-control mb-4" placeholder="Username" onChange={handleChange} required />
                    <input type="password" name="password" className="form-control mb-4" placeholder="Password" onChange={handleChange} required />
                    <button className="btn btn-success full-width">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage