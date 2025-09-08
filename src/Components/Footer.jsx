import React from "react";

const Footer = () => {
    return(
        <footer className="text-white py-4"
        style={{
            background:'linear-gradient(to right, #0d47a1, #1976d2)'
        }}
        >
            <div className="container text-center">
                <p className="mb-1">&copy;{new Date().getFullYear()} Mkulima Digital. All rights reserved.</p>
                <p className="mb-0">Designed with purpose and sustainability in mind.</p>
            </div>
        </footer>
    );
}

export default Footer