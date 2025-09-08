import React from "react";

const GetInvolvedSection = () => {
    return(
        <section id="get-involved" className="py-5" 
        style={{
            background:'linear-gradient(to bottom, #fef9f5, #fff)'
        }}
        >
            <div className="container">
                <h2 className="text-center mb-4 display-5 fw-bold">Get Involved</h2>
                <p className="text-center mb-5 lead">Whether you are a farmer, buyer or supporter - join us in transforming agriculture through technology and collaboration.</p>
                <div className="row g-4">
                    {[
                        {
                            title: "Join as a farmer",
                            text: "Register and showcase your produce. Reach more clients, access insights and grow your agribusiness.",
                            btn: "Register as farmer"
                        },
                        {
                            title: "Join as a Client",
                            text: "Find fresh farm products directly from local farmers. Negotiate deals and enjoy transparency.",
                            btn: "Start Buying"
                        },
                        {
                            title: "Partner with us",
                            text: "Support digital agriculture and make a lasting impact. We're open to NGOs, investors and educators.",
                            btn: "Become a Partner"
                        }
                    ].map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100 shadow border-0">
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                    <a href="#contact" className="btn btn-primary mt-3">{item.btn}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default GetInvolvedSection