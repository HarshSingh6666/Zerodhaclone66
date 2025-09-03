import React from "react";
import { useCookies } from "react-cookie";
import "./Logout.css"; // CSS import

const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleYes = () => {
    removeCookie("token", { path: "/" });
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };

  const handleNo = () => {
    window.location.href = "http://localhost:5000/";
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h1>Logout Confirmation</h1>
        <p>Are you sure you want to logout?</p>
        <div className="buttons">
          <button className="yes-btn" onClick={handleYes}>Yes</button>
          <button className="no-btn" onClick={handleNo}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
