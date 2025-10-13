import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Connecting Farmers to Markets</h1>
        <p>
          Mkulima Digital is a one-stop agricultural platform helping farmers list
          products, access buyers, and grow agribusiness digitally.
        </p>
        <a href="/marketplace" className="hero-button">
          Explore Marketplace
        </a>
      </div>
    </section>
  );
};

export default Hero;
