import React, {  useState  } from "react";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
import './Auth.css';

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
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Register button clicked')

        try{
            const res = await axios.post('http://127.0.0.1:8000/api/auth/register/', form);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        }catch(err){
            if(err.response){
                console.error('Backend error', err.response.data)
            }else{
                console.error(err);
                setError('Registration failed. Try again.')
            }
        }
    };

    return(
        <div className="auth-container">
            <div className="auth-card fade-in">
                <h2 className="auth-title">Create an Account</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input value={form.username}     type="text" name="username" className="form-control mb" placeholder="Username" onChange={handleChange} required/>
                    <input value={form.email}   type="email" name="email" className="form-control mb"placeholder="Email" onChange={handleChange} required/>
                    <input value={form.password}  type="password" name="passowrd"className="form-control mb" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} required/>
                    <h4>Select Role:</h4>
                    <select value={form.role} name="role" id="" className="form-control mb" onChange={handleChange}>
                        <option value="farmer">Farmer</option>
                        <option value="customer">Customer</option>
                        <option value="Retailer">Retailer</option>
                    </select>
                    <button className="btn-primary full-width">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage