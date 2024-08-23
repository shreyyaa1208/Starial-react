import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItems,
  updateCartItem,
  clearCartItems,
} from "../../slices/cartSlice";

function App() {
  const [cart, setCart] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("40");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [totals, setTotal] = useState({
    subtotal: 0,
    shipping: 0,
    gst: 0,
    total: 0,
  });
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  console.log("cartData", cartData);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");

    window.location.href = "/home";
  };

  const calculateTotal = () => {
    let subtotal = 0;

    for (let i = 0; i < cartData.products.length; i++) {
      subtotal =
        subtotal + cartData.products[i].quantity * cartData.products[i].price;
    }
    const shipping = 99;
    const gst = 18;

    setTotal({
      subtotal,
      shipping,
      gst,
      total: subtotal + shipping + gst,
    });
    return {
      subtotal,
      shipping,
      gst,
      total: subtotal + shipping + gst,
    };
  };

  return (
    <div className="container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              <option value="MP">Madhya Pradesh</option>
              {/* Add more states as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pincode">PIN Code</label>
            <input
              type="text"
              id="pincode"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="shipping-method">
            <h3>Shipping Method</h3>
            <input
              type="radio"
              id="standardShipping"
              name="shipping"
              value="40"
              checked={shippingMethod === "40"}
              onChange={(e) => setShippingMethod(e.target.value)}
            />
            <label htmlFor="standardShipping">Standard Shipping - ₹99</label>
          </div>
          <div className="payment-method">
            <h3>Payment Method</h3>
            <input
              type="radio"
              id="onlinePayment"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="onlinePayment">Pay Online</label>
          </div>
          <button type="submit">Pay now</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartData.products.map((item) => {
          return (
            <div className="order-item" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          );
        })}
        <div className="order-item">
          <span>Subtotal:</span>
          <span>₹{totals?.subtotal.toFixed(2)}</span>
        </div>
        <div className="order-item">
          <span>Shipping:</span>
          <span>₹{totals?.shipping.toFixed(2)}</span>
        </div>
        <div className="order-item">
          <span>GST:</span>
          <span>₹{totals?.gst.toFixed(2)}</span>
        </div>
        <div className="order-item" style={{ fontWeight: "bold" }}>
          <span>Total:</span>
          <span>₹{totals?.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
