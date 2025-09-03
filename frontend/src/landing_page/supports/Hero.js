import React from "react";
function Hero() {
  return (
    <section className="container-fluid mb-5" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a hreff=" ">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg :How do i activate  F&O, why is my order getting rejected " />
          <br />
          <br/>
          <a href=" ">Track account opening</a>
          <a href=" ">Track segment activation</a>
          <a href=" ">Intraday margins</a>
          <a href=" ">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <ol>
            <li>
              <a href=" ">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a></li><br/>
              
              <li><a href=" ">
                Revision in expiry day of Index and Stock derivatives contracts
              </a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
