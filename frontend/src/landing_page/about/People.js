import React from "react";
import {Link} from "react-router-dom";
function People() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-4 text-center">
          <img
            src="media\nithinKamath.jpg"
            style={{ width: "60%", borderRadius: "100%" }}
          />
          <h3 className="mt-3">Nithin Kamath</h3>
          <h4 >Founder, CEO</h4>
        </div>
        <div className="col-6 mt-2">
          <h2>People</h2>
          <p className="fs-5 mt-5 mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="fs-5 mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="fs-5 mb-3">Playing basketball is his zen.</p>

          <p className="fs-5 mb-3">Connect on <Link to="/"style={{textDecoration:"None"}}>Homepage</Link> / <Link to=""style={{textDecoration:"None"}}>TrandingQnA</Link> / <Link to=""style={{textDecoration:"None"}}>Twitter</Link> </p>
        </div>
      </div>
    </div>
  );
}

export default People;
