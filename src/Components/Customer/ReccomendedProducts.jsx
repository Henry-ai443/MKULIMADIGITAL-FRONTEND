import React from "react";
const ReccomendedProducts = () => {
    const products = [
        {id: 1, name:'Fresh Tomatoes', price:'KES 120 / kg'},
        {id: 2, name:'Organic Maize', price:'KES 80 / kg'},
        {id: 3, name:'Farm Eggs', price:'KES 60 / kg'},
        {id: 4, name:'Milk', price: 'KES 60 / litre'}
    ];

    return(
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white text-center">
                <h3 className="mb-0">Recommended for You:</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    {products.map((item) => (
                        <div key={item.id} className="col-md-3 col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h6 className="card-title">{item.name}</h6>
                                    <p className="text-muted">{item.price}</p>
                                    <button className="btn btn-sm btn-success">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
export default ReccomendedProducts