import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <h1>Login</h1>
        <div className="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            {" "}
            <button className="submit-button">Login</button>
          </p>
          <p className="create-account-text">
            <Link to="/signup" className="signup">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
