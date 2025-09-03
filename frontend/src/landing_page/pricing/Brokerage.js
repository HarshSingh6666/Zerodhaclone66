import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    switch (activeTab) {
      case "equity":
        return (
          <table className="table table-bordered table-hover mt-4 ">
            <thead className="table-light text-center">
              <tr>
                <th></th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&amp;O - Futures</th>
                <th>F&amp;O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul className="list-unstyled m-0">
                    <li>0.125% of intrinsic value (exercised options)</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Transaction Charges</th>
                <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                <td>NSE: 0.00173%<br />BSE: 0</td>
                <td>NSE: 0.03503%<br />BSE: 0.0325%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="4">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI Charges</th>
                <td colSpan="4">₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp Charges</th>
                <td>0.015% or ₹1500 / crore on buy</td>
                <td>0.003% or ₹300 / crore on buy</td>
                <td>0.002% or ₹200 / crore on buy</td>
                <td>0.003% or ₹300 / crore on buy</td>
              </tr>
            </tbody>
          </table>
        );

      case "currency":
        return (
          <table className="table table-bordered table-hover mt-4">
            <thead className="table-light text-center">
              <tr>
                <th></th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td colSpan="2">No STT</td>
              </tr>
              <tr>
                <th>Transaction Charges</th>
                <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                <td>NSE: 0.0311%<br />BSE: 0.001%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI Charges</th>
                <td colSpan="2">₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp Charges</th>
                <td colSpan="2">0.0001% or ₹10 / crore on buy</td>
              </tr>
            </tbody>
          </table>
        );

      case "commodity":
        return (
          <table className="table table-bordered table-hover mt-4">
            <thead className="table-light text-center">
              <tr>
                <th></th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Brokerage</th>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <th>STT/CTT</th>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <th>Transaction Charges</th>
                <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                <td>MCX: 0.0418%<br />NSE: 0.001%</td>
              </tr>
              <tr>
                <th>GST</th>
                <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <th>SEBI Charges</th>
                <td>
                  Agri: ₹1 / crore<br />
                  Non-agri: ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <th>Stamp Charges</th>
                <td>0.002% or ₹200 / crore on buy</td>
                <td>0.003% or ₹300 / crore on buy</td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container my-5 fd-1">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "equity" ? "active" : ""}`} onClick={() => setActiveTab("equity")}>Equity</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "currency" ? "active" : ""}`} onClick={() => setActiveTab("currency")}>Currency</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "commodity" ? "active" : ""}`} onClick={() => setActiveTab("commodity")}>Commodity</button>
        </li>
      </ul>

      {renderTable()}

      <p className="mt-4 fs-4 text-center">
        <a href="#" style={{textDecoration:"none"}}>Calculate your costs upfront </a> using our brokerage calculator
      </p>
    </div>
  );
}

export default Brokerage;
