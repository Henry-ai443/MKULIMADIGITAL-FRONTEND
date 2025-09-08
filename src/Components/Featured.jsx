import React from "react";
import Tomatoes from '../assets/tomatoes.jpg'
import Veges from '../assets/veges.jpg'
import Watermelon from '../assets/watermelon.jpg'
import Peper from '../assets/pepper.jpg'
import Chillie from '../assets/chilli.jpg'
import '../Styles/featuredProducts.css';
const FeaturedProductsSection = () => {
    return (
        <section className=" py-5 featured-products-section" 
        style={{
            background: 'linear-gradient(to right, #e0f7fa, #80deea',
            width: '100%'
        }}
        >
            <div className="container">
            <h2 className="text-center display-4 mb-4">Featured Products</h2>
            {/* Carousel For featured Products */}
            <div id="featuredProductsCarousel" className="carousel slide" data-bs-ride = 'carousel'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Tomatoes} alt="Product 1"  className="card-img-top img-fluid"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Tomatoes</h5>
                                        <p className="card-text"> Ksh: 10.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Veges} alt="Product-2" className="card-img-top"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Vegetables</h5>
                                        <p className="card-text">Ksh: 15.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Watermelon} alt="" className="card-img-top"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Watermelons</h5>
                                        <p className="card-text">Ksh: 20.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Peper} alt="Product 1"  className="card-img-top"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Pepper</h5>
                                        <p className="card-text"> Ksh: 5.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Chillie} alt="Product-2" className="card-img-top"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Chillie</h5>
                                        <p className="card-text">Ksh: 5.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={Watermelon} alt="" className="card-img-top"
                                    style={{height: '180px', objectFit:'cover'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Watermelons</h5>
                                        <p className="card-text">Ksh: 20.00</p>
                                        <a href="#" className="btn btn-success">View Product</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden ="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target ="#featuredProductsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            
        </section>
    );
}
export default FeaturedProductsSection