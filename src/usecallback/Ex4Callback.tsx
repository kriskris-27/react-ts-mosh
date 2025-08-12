import React, { useState, useCallback, memo } from "react";

const ProductCard = memo(({ product, onAddToCart }) => {
  console.log(`Rendering product: ${product.name}`);
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Keyboard", price: 49 },
  ]);

  // Without useCallback → function recreated every render → ProductCard re-renders unnecessarily
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div>
      <h2>🛒 Shopping Cart ({cart.length} items)</h2>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
