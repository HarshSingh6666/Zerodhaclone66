import React from "react";
import {Link} from "react-router-dom";

function Notfound() {
  return (
    <div className="container mt-10 mb-5 text-center">
      <h2 className="mb-3">404 </h2>
      <h1>Kiaan couldn’t find that page</h1>
      <p>
      We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha's home page</Link>
      </p>
    </div>
  );
}

export default Notfound;
