import React from 'react';
import Farm from '../assets/farm.jpg';
import '../Styles/about.css';

const About = () => {
  return (
    <section
      className="about-section py-5 text-white"
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold mb-4">About Mkulima Digital</h2>
          <p className="lead">
            Mkulima Digital is a platform dedicated to empowering farmers by connecting them to markets, resources, and vital
            information using modern technology. Our mission is to revolutionize the agricultural supply chain across the region.
          </p>
          <p>
            We help smallholder farmers, distributors, and retailers streamline logistics, increase visibility, and maximize profits through
            a sustainable digital ecosystem.
          </p>
        </div>

        <div className="col-lg-5">
          <img src={Farm} alt="Farm" className="img-fluid rounded farm-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
