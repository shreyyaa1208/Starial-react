import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Checkout from "../components/Checkout/Checkout";
import Return from "../components/Return/Return";
import Terms from "../components/Terms/Terms";
import Privacy from "../components/Privacy/Privacy";
import Shipping from "../components/Shipping/Shipping";
import About from "../components/About/About";

const Cart = lazy(() => import("../components/Cart/Cart"));
const Login = lazy(() => import("../components/Login/Login"));
const Signup = lazy(() => import("../components/Signup/Signup"));

function MainRouter() {
  return (
    <Router>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={`/cart`} element={<Cart />}></Route>
          <Route path={`/checkout`} element={<Checkout />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
          <Route path={`/signup`} element={<Signup />}></Route>
          <Route path={`/about`} element={<About />}></Route>
          <Route path={`/return`} element={<Return />}></Route>
          <Route path={`/terms`} element={<Terms />}></Route>
          <Route path={`/privacy`} element={<Privacy />}></Route>
          <Route path={`/shipping`} element={<Shipping />}></Route>
          <Route path={`/`} element={<Home />}></Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default MainRouter;
