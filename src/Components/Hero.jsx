import React from "react";

const Hero = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-white text-center py-5"
      style={{ backgroundColor: "#F1F8E9" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Hero Text */}
          <div className="col-md-8 text-start">
            <h1 className="display-5 text-success">
              Connecting Farmers to Markets
            </h1>
            <p className="lead text-dark">
              Mkulima Digital is a one-stop agricultural platform helping
              farmers list products, access buyers, and grow agribusiness
              digitally.
            </p>
            <a href="#" className="btn btn-success btn-lg mt-3">
              Explore Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
