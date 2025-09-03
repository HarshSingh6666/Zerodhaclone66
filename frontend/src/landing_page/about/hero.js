import React from 'react';
import {Link} from "react-router-dom";
function Hero() {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <h1 className="text-center mb-5 ">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
        <br/>
        <hr />
        <br/>
        <div className="col-1"></div>
        <div className="col-5 m-1">
          <p className="mt-5 fs-5">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mt-3 fs-5">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mt-3 fs-5">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
          </div>
          <div className="col-5 mb-5 m-2">
            <p className=' fs-5 mt-5 '>
              In addition, we run a number of popular open online educational and
              community initiatives to empower retail traders and investors.</p>
             <p className="mt-3 fs-5"><Link to="#"style={{textDecoration:"None"}}>Rainmatter</Link>, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets. </p>
              <p className="mt-3 fs-5">And yet, we are always up to something new every
              day. Catch up on the latest updates on our <Link to="" style={{textDecoration:"None"}}>blog</Link> or see what the
              media is <Link to="" style={{textDecoration:"None"}}>saying about us</Link> or learn more about our business and
              product <Link to="" style={{textDecoration:"None"}}>philosophies</Link>.</p>
            </div>
        </div>
      </div>
     );
}

export default Hero;