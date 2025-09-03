import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="mb-3">To create a ticket, select a relevant topic</h4>

        <div className="col-4 p-5 mt-5 fs-5">
          <h3>
            <i className="fa-solid fa-circle-plus"></i> Account opening
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Resident individual
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Minor
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Non Resident Indian (NRI)
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Glossary
          </a>
        </div>

        <div className="col-4 p-5 mt-5 fs-5">
          <h3>
            <i className="fa-solid fa-user"></i> Your Zerodha Account
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Your Profile
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Account modification
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Nomination
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Transfer and conversion of securities
          </a>
        </div>

        <div className="col-4 p-5 mt-5 fs-5">
          <h3>
            <i className="fa-solid fa-chart-simple"></i> Kite
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            IPO
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Trading FAQs
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Margin Trading Facility (MTF) and Margins
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Charts and orders
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Alerts and Nudges
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            General
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-4 p-5 mb-5 fs-5">
          <h3>
            <i className="fa-solid fa-wallet"></i> Funds
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Add money
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Withdraw money
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Add bank accounts
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            eMandates
          </a>
        </div>

        <div className="col-4 p-5 mb-5 fs-5">
          <h3>
            <i className="fas fa-at"></i> Console
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Portfolio
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Corporate actions
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Funds statement
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Reports
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Profile
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Segments
          </a>
        </div>

        <div className="col-4 p-5 mb-5 fs-5">
          <h3>
            <i className="fas fa-coins"></i> Coin
          </h3>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Mutual funds
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            National Pension Scheme (NPS)
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Features on Coin
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            Payments and Orders
          </a>
          <br />
          <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: "none", lineHeight: "2" }}>
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
