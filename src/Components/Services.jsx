import React from 'react';
import '../Styles/services.css'
const ServicesSection = () => {
  const services = [
    {
      title: "Farmer-Client Matching",
      text: "Connects farmers directly with clients to negotiate delivery and pickup."
    },
    {
      title:"Smart Marketplace",
      text:"List and browse fresh produce with real-time availability."
    },
    {
      title: "AI Insights",
      text:"Helps farmers understand market trends and crop strategies."
    },
    {
      title: "Product Analytics",
      text:"Track views, favorites and sales to improve product choices."
    },
    {
      title:"Secure Communication",
      text:"Chat safely with clients and farmers to finalize transactions."
    }
  ];

  return (
    <section
      id="services"
      className="py-5"
      style={{
        background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        margin: '0',
      }}
    >
      <div className="container">
        <div className="section-vertical-layout">
          <h2 className="section-title">Our Services</h2>

          {/* Scrollable cards on small screens */}
          <div className="d-flex d-md-none overflow-auto px-2 gap-3">
            {services.map((service, index) => (
              <div className="card flex-shrink-0" style={{ minWidth: '250px' }} key={index}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid layout on medium and larger screens */}
          <div className="row g-4 d-none d-md-flex mt-4">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
