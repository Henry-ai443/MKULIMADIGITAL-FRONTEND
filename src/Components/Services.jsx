import React from 'react';

const ServicesSection = () => {
    return(
        <section id='services' className='py-5'
        style={{
            background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
            margin:'0',
        }}
        >
            {/*Scrollable container */}
            <div className='container'>
                <h2 className='text-center mb-5 display-5 fw-bold'>Our Services</h2>
                <div className='d-flex d-md-none overflow-auto px-2 gap-3'>
                    {[
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
                            title:"Secure communication",
                            text  :"Chat safely with clients and farmers to finalize transactions."
                        }
                    ].map((service, index) => (
                        <div className='card flex-shrink-0' style={{
                            minWidth: '250px'
                        }} key={index}>
                            <div className='card-body'>
                                <h5 className='card-title fw-bold'>{service.title}</h5>
                                <p className='card-text'>{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/*Normal  grid for medium and larger screens */}
                <div className='row g-4 d-none d-md-flex mt-4'>
                    {[
                        'Farmer-Client Matching',
                        "Smart MarketPlace",
                        "AI Insights",
                        "Product Analytics",
                        "Secure Communication",
                    ].map((title, index) =>(
                        <div className='col-md-4' key={index}>
                            <div className='card h-100 shadow-sm border-0'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{title}</h5>
                                    <p className='card-text'>
                                        {/*Match description based on title */}
                                        {{
                                            "Farmer-Client Matching": "Connects farmers directly with clients to negotiate delivery and pickup.",
                                            "Smart Marketplace":"List and browse fresh produce with real-time availability.",
                                            "AI Insights":"Helps farmers understand market trends and crop strategies.",
                                            "Product Analytics":"Track views, favorites and sales to improve product choices.",
                                            "Secure Communication":"Chat safely with clients and farmers to finalize transactions."
                                        }[title]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ServicesSection;