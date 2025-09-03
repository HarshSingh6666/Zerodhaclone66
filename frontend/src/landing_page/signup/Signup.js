import React from 'react';
import SignupForm from './SignupForm'; 

function Signup() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="mt-5">
          Open a free demat and trading account online
        </h1>
        <h4>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
        <div className="col-6 mt-5">
          <img 
            src="media/signup.svg" 
            alt="Signup illustration" 
            style={{ width: "100%" }} 
          />
        </div>
        <div className="col-4 mt-5 mb-5">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
