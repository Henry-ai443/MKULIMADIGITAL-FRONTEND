import React from "react";
const testimonials = [
    {
        name: "Grace Mwangi",
        role:"Farmer Nakuru",
        text: "This plartform has made it easier to find buyers for my produce. The insights also helped me plan my harvest better.",
        rating: 5
    },
    {
        name: "Joseph Otieno",
        role:"Client, Kisumu",
        text: "I love how easy it is to connect with nearby farmers. The quality and pricing are excellent",
        rating: 4
    },
    {
        name: "Fatuma Ali",
        role:"Farmer, Mombasa",
        text: "The AI recommendations helped me switch to more profitable crops. I'm grateful",
        rating: 5
    }
];

const StarRating = ({rating}) => {
    const stars = [];
    for(let i = 0; i < 5; i++){
        stars.push(
            <span key={i} className="{ i < rating ? 'text-warning' : 'text-muted'}">&#9733</span>
        );
    }
    return <div>{stars}</div>
};
const TestimonialSection = () => {
    return(
        <section id="testimonials" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center display-5 fw-bold mb-4">What People Say</h2>
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial, index) =>(
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <div className="bg-white rounded shadow p-4 mx-auto" 
                                    style={{maxWidth: '600px'}}
                                    >
                                        <p className="fs-5 fst-italic">"{testimonial.text}"</p>
                                        <h5 className="mt-3 mb-0 fw-bold">{testimonial.name}</h5>
                                        <small className="text-muted">{testimonial.role}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next"  type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default TestimonialSection