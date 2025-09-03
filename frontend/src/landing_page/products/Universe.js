import React from "react";
import {Link} from "react-router-dom";
function Universe() {
  return (
    <div className="container text-center">
      <div className="row">
        <h3 className="fs-4 mb-5">Want to know more about our technology stack? Check out the 
          <a href=" " style={{textDecoration:"None"}}> Zerodha.tech</a> blog.

</h3>
        <h1 className="m-5  mt-5">The Zerodha Universe</h1>
        <h2 className="fs-5 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </h2>
        <div className="col-4 mt-4 mb-5">
          <a href="">
            <img
              src="media\zerodhaFundhouse.png"
              style={{ width: "50%", marginBottom: "10px" }}
            />
          </a>
          <p className="mb-5 mt-3">
            Our assets Management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <a href="">
            <img src="media\streakLogo.png" style={{ width: "50%" }} />
          </a>
          <p className="mt-4 mb-5">Systematib trading platform that allows to create and backtest strategies without coding.</p>
        </div>

        <div className="col-4 mt-5">
           <a href="">
            <img
              src="media\sensibullLogo.svg"
              style={{ width: "50%", marginBottom: "10px" }}
            />
          </a>
          <p className="mb-5 mt-3">
            Our assets Management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <a href="">
            <img src="media\smallcaseLogo.png" style={{ width: "50%" }} />
          </a>
          <p className="mt-4 mb-5">Systematib trading platform that allows to create and backtest strategies without coding.</p>
        </div>

        <div className="col-4 mt-4">
           <a href="">
            <img
              src="media\tijori.svg"
              style={{ width: "40%", marginBottom: "5px" }}
            />
          </a>
          <p className="mb-5 mt-3">
            Our assets Management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <a href="">
            <img src="media\dittoLogo.png" style={{ width: "40%" }} />
          </a>
          <p className="mt-3 mb-5">Systematib trading platform that allows to create and backtest strategies without coding.</p>
        </div>
      </div>
      <Link to="/Signup">
                    <button className='p-2 btn btn-primary fs-5 mb-5'  style={{width:"20%", margin:"0 auto"}}>
                        Sign up for free
                    </button>
                </Link>
        <h3></h3>
    </div>
    
  );
}

export default Universe;
