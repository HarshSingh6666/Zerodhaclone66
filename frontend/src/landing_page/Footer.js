import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container border-top">
        <div className="row">
          <div className="col-3 mt-5">
            <img
              src="media/logo.svg"
              alt="Zerodha logo"
              style={{ width: "40%" }}
            />
            <p className="mt-3">@ 2010 -2025, Zerodha Broking Ltd</p>
            <p>All rights reserved</p>
            <p className="border-bottom">
              <i className="fa-brands fa-x-twitter m-3"></i>
              <i className="fa-brands fa-square-facebook m-3"></i>
              <i className="fa-brands fa-instagram m-3"></i>
              <i className="fa-brands fa-linkedin-in m-3"></i>
            </p>
            <p>
              <i className="fa-brands fa-youtube m-3"></i>
              <i className="fa-brands fa-whatsapp m-3"></i>
              <i className="fa-brands fa-telegram m-3"></i>
            </p>
          </div>

          <div className="col-1"></div>

          <div className="col-2 mt-5">
            <h4 className="mb-3">Account</h4>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Open demat account
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Minor demat account
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              NRI demat account
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Commodity
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Dematerialisation
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Fund transfer
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              MTF
            </a>
            <br />
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none", color: "black" }}
            >
              Referral program
            </a>
            <br />
            <br />
          </div>

          <div className="col-2 mt-5">
            <h4 className="mb-3">Support</h4>
            <p>Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
            <p>Bulletin</p>
            <p>Circular</p>
            <p>Z-Connect blog</p>
            <p>Downloads</p>
          </div>

          <div className="col-2 mt-5">
            <h4 className="mb-3">Company</h4>
            <p>About</p>
            <p>Philosophy</p>
            <p>Press & media</p>
            <p>Careers</p>
            <p>Zerodha Cares (CSR)</p>
            <p>Zerodha.tech</p>
            <p>Open source</p>
          </div>

          <div className="col-2 mt-5">
            <h4 className="mb-3">Quick links</h4>
            <p>Upcoming IPOs</p>
            <p>Brokerage charges</p>
            <p>Market holidays</p>
            <p>Economic calendar</p>
            <p>Calculators</p>
            <p>Markets</p>
            <p>Sectors</p>
          </div>
        </div>

        <div className="mt-3 text-small text-muted para">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 –
            SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a
              href="mailto:complaints@zerodha.com"
              style={{ textDecoration: "none" }}
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a
              href="mailto:dp@zerodha.com"
              style={{ textDecoration: "none" }}
            >
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{ textDecoration: "none" }}
            >
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive information
            of your transactions directly from Exchange on your mobile/email at
            the end of the day. Issued in the interest of investors..."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
