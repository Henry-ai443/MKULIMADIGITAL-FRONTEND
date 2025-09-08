import React from "react";

const ContactSection = () => {
    return(
        <section id="contact" className="py-5"
        style={{
            background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)'
        }}
        >
            <h2 className="text-center mb-4 display-5 fw-bold">Contact Us</h2>
            <p className="text-center mb-5 lead">Have questions or need support? We're here to help!</p>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form action="" className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name: </label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />

                        <div className="mb-3">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your Email" id="email" required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea name="" id="message" className="form-control" rows="5" placeholder="Your message here..." required></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-4">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default ContactSection