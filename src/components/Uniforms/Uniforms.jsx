import React, { useState, useEffect } from "react";
import "./styles.css";
import UniformsImage from "../../assets/uniforms.png";

function Uniforms() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }, [cart]);

  function updateCartDisplay() {
    const cartCount = Object.values(cart).reduce(
      (total, item) => total + item.count,
      0
    );
    const cartBadge = document.getElementById("cart-badge");
    if (cartBadge) {
      if (cartCount > 0) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = "block";
      } else {
        cartBadge.style.display = "none";
      }
    }
  }

  function addToCart(name, price, isUniform = false) {
    const key = isUniform ? "uniform" : name;
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[key]) {
        newCart[key].count++;
      } else {
        newCart[key] = { name, price, count: 1, isUniform };
      }
      return newCart;
    });
    showAlert(`Added ${name} to cart!`);
  }

  function showAlert(message) {
    // Implement your alert logic here
    alert(message);
  }

  return (
    <div className="container">
      <h2 style={{ padding: "10px 20px" }}>Featured Uniforms</h2>
      <div className="product-grid">
        <div className="uniform">
          <img src={UniformsImage} alt="Uniforms" />
          <h3>Uniforms</h3>
          <button
            style={{ marginBottom: "0px" }}
            onClick={() => addToCart("Uniforms", 0, true)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Uniforms;
