import React from "react";
import '../Styles/Navbar.css';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" 
        style={{backgroundColor: '#388E3C'}}
        >
            <div className="container">
                <a href="#" className="fst-italic text-white fs-2 text-decoration-none">Mkulima Digital</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target ="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navabr-nav ms-auto list-unstyled text-white">
                        <li className="nav-item fs-7"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item fs-7"><a href="/farmer-dashboard" className="nav-link">Farmer Dashboard</a></li>
                        <li className="nav-item fs-7"><a href="/customer-dashboard" className="nav-link">Customer Dashboard</a></li>
                        <li className="nav-item fs-7"><a href="/login" className="nav-link">Login</a></li>
                        <li className="nav-item fs-7"><a href="/register" className="nav-link">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;