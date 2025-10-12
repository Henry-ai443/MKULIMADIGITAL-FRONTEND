import React from "react";


const RecommendedProducts = () => {
  const products = [
    { id: 1, name: "Fresh Tomatoes", price: "KES 120 / kg" },
    { id: 2, name: "Organic Maize", price: "KES 80 / kg" },
    { id: 3, name: "Farm Eggs", price: "KES 60 / kg" },
    { id: 4, name: "Milk", price: "KES 60 / litre" },
  ];

  return (
    <section className="recommended-products">
      <div className="header">
        <h2>Recommended for You</h2>
      </div>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
