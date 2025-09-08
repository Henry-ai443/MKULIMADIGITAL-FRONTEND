import React from "react";
const Hero = () =>{
    return(
        <section className="d-flex align-items-center justify-content-center text-white text-center" style={{backgroundColor: '#F1F8E9', 

        }}>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="text-left me-4">
                        <h1 className="display-5 text-success" style={{color: 'black'}}>Connecting Farmers to Markets</h1>
                        <p className="lead text-muted"  style={{color: 'black'}}>Mkulima Digital is a one-stop agricultural plartform helping farmers list products, access buyers and grow agribusiness digitally.</p>
                        <a href="#" className="btn btn-succes btn-lg mt-3">Explore Marketplcae</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="display-4 fw-bold text-dark">Welcome to Mkulima Digital</h1>
                <p className="text-left ms-4 text-black fs-3">Empowering Farmers with Technology</p>
            </div>
        </section>
    );
}
export default Hero