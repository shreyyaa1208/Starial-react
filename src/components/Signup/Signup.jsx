import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signuo() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <h1>SignUp</h1>
        <div className="form">
          <input type="name " placeholder="First Name" />
          <input type="name" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            {" "}
            <button className="submit-button">Create Account</button>
          </p>
        </div>
      </div>
    </div>
  );
}
