import React, { useState, useCallback, memo } from "react";

const ProductCard = memo(({ product, onAdd }) => {
  console.log(`Rendering: ${product.name}`);
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
});

export default function Shop() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Keyboard", price: 49 },
  ];

  const addToCart = useCallback(
    (product) => setCart((c) => [...c, product]),
    []
  );

  return (
    <div>
      <h2>🛒 Cart: {cart.length}</h2>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
