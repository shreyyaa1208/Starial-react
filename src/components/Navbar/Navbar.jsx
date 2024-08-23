import React from "react";
import "./styles.css";
import ShoppingBag from "../../assets/shopping-bag.png";
import LogoCopy from "../../assets/logo copy.jpg";
import Profile from "../../assets/profile.png";
import { useSelector } from "react-redux";

function Navbar(props) {
  const cartData = useSelector((state) => state.cart);
  console.log("cartData Navbar", cartData);

  return (
    <div className="navbar">
      <img src={LogoCopy} alt="Logo" className="navbar-logo" />
      <div className="search-container">
        <select>
          <option>All</option>
        </select>
        <input type="text" placeholder="Search for products" />
        <span className="icon">&#128269;</span>
      </div>
      <a href="#">Home</a>
      <a href="#categories-section">Categories</a>
      <a href="/about">About Us</a>
      <a href="/login" id="login-link">
        <img src={Profile} alt="profile" className="profile" />
      </a>
      <a href="/cart" id="cart-link">
        <img src={ShoppingBag} alt="csart" className="cart" />
        {cartData.productCount ? (
          <span id="cart-badge" className="cart-badge">
            {cartData.productCount}
          </span>
        ) : (
          <></>
        )}
      </a>
    </div>
  );
}

export default Navbar;
