import React from "react";
import { dummyProducts } from "../assets/assets"; // adjust this path

const ProductList = () => {
  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dummyProducts.map((product) => (
          <div
            key={product._id}
            style={{ margin: 20, border: "1px solid #ccc", padding: 10 }}
          >
            <img src={product.image[0]} alt={product.name} width={100} />
            <h4>{product.name}</h4>
            <p>Category: {product.category}</p>
            <p>
              Price: <s>₹{product.price}</s>{" "}
              <strong>₹{product.offerPrice}</strong>
            </p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
