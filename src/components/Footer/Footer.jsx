import React from "react";
import "./styles.css";

function Footer() {
  function showAlert(message) {
    const alert = document.getElementById("alert");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message;
    alert.style.display = "flex";
    setTimeout(() => {
      alert.style.display = "none";
    }, 3000);
  }

  function closeAlert() {
    document.getElementById("alert").style.display = "none";
  }
  return (
    <>
      <footer>
        <p>&copy; {new Date().getFullYear()} Starial. All rights reserved.</p>
        <div>
          <a href="return">Return Policy</a> |
          <a href="terms">Terms & Conditions</a> |
          <a href="privacy">Privacy Policy</a> |
          <a href="shipping">Shipping Policy</a>
        </div>
        <p>
          Contact us: starialofficial@gmail.com |{" "}
          <a href="https://www.instagram.com/starial_/">Instagram</a>
        </p>
      </footer>
      <div id="alert" className="alert">
        <span id="alertMessage"></span>
        <button onClick={() => closeAlert()}>OK</button>
      </div>
    </>
  );
}

export default Footer;
