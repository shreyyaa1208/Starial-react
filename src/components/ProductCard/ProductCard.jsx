import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../slices/cartSlice";
import { updateCartItem } from "../../slices/cartSlice";

export const Alert = ({ message, showAlert, handleClose }) => {
  return (
    <div className="alert" style={{ display: showAlert ? "block" : "none" }}>
      <span id="alertMessage">{message}</span>
      <button onClick={handleClose}>OK</button>
    </div>
  );
};

function ProductCard(props) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const [showAlert, setShowAlert] = useState(false);

  function handleClick(id, name, price) {
    console.log("name", price);
    dispatch(addtoCart({ id, name, price }));
    setShowAlert(true);
    console.log("cartData", cartData);
  }

  function handleClose() {
    setShowAlert(false);
  }

  return (
    <div className="product">
      <img src={props.img} />

      <h3 className="name">{props.name}</h3>
      <h4 className="price">₹{props.price}</h4>
      <button
        className="button"
        onClick={() => handleClick(props.id, props.name, props.price)}
      >
        Add to Cart
      </button>
      <Alert
        message="Product successfully added to cart"
        showAlert={showAlert}
        handleClose={handleClose}
      />
    </div>
  );
}
export default ProductCard;
