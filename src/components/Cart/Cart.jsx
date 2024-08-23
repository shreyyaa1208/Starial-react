import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItems,
  updateCartItem,
  clearCartItems,
} from "../../slices/cartSlice";
import Modal from "../Modal/Modal";

const Cart = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const openAlert = () => {
    setShowAlert(true);
  };
  console.log(cartData);

  const closeAlert = () => {
    setShowAlert(false);
  };

  function handleIncrement(id) {
    dispatch(updateCartItem({ id, operationType: "increment" }));
  }

  function handleDecrement(id) {
    dispatch(updateCartItem({ id, operationType: "decrement" }));
  }

  function onClose() {
    setShowModal(false);
  }

  function onClick() {
    dispatch(clearCartItems());
    setShowModal(false);
  }

  function clearCart() {
    console.log("clear cart is called");
    setShowModal(true);
  }

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="cart-page">
      <nav className="navbar">
        {/*     <Link to="../Home/Home.jsx">← Back to Shop</Link> */}
      </nav>

      <h2>Your Cart</h2>

      <div className="container">
        <div id="cart-content">
          <ul>
            {cartData.products.map((item, index) => {
              return (
                <li class="cart-item" key={index}>
                  <div class="item-info">
                    <h3>{item.name}</h3>
                    <p>Price: Rs. {item.price.toFixed(2)}</p>
                  </div>
                  <div class="quantity-controls">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                    {/* <button onclick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onclick={() => handleIncrement(item.id)}>+</button> */}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="action-buttons">
            <button onClick={clearCart}>Clear Cart</button>
            <a type="button" href={"/checkout"}>
              Checkout
            </a>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-box">
            <span className="alert-close" onClick={closeAlert}>
              ×
            </span>
            <div className="alert-content">
              Are you sure you want to clear your cart?
            </div>
            <div className="alert-buttons">
              <button
                onClick={() => {
                  /* Handle YES action */
                }}
              >
                YES
              </button>
              <button onClick={closeAlert}>NO</button>
            </div>
          </div>
        </div>
      )}
      <Modal
        message="Are you sure you want to clear your cart?"
        showModal={showModal}
        onClose={onClose}
        onClick={onClick}
      />
    </div>
  );
};

export default Cart;
