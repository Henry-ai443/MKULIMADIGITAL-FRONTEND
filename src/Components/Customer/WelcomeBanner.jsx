import React from "react";
import './WelcomeBanner.css';
const  WelcomeBanner = ({username = "Henry Maina"}) => {
    return(
        <div className="alert alert-success shadow-sm rounded-3 p-4 mb-4 welcome-banner">
            <h3 className="mb-1 text-white">Welcome back:   <strong>{username}</strong></h3>
            <p className="mb-0 text-light">Explore today's best market deals, view your orders or get support instantly</p>
        </div>
    );
}
export default WelcomeBanner