import React from "react";
import {Link} from "react-router-dom";

function Openaccount() {
  return (
    <div className="container mt-10 mb-5 text-center">
      <h1 className="mb-3">Open a Zerodha account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link to="/Signup">
      <button
        className="p-2  btn btn-primary fs-5 mt-3"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up for free
      </button>
      </Link>
    </div>
  );
}

export default Openaccount;
