import React from 'react';
function RightSection({
  imageURL,
  productName,
  productDescription,
  kiteConnect,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5 ">
      <div className="row ">
        <div className="col-6  mt-5 p-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="mb-3">
            <a href={kiteConnect} style={{textDecoration:"None"}}>kite Connect <i class="fa-solid fa-arrow-right-long p-2"></i></a>

            <a href={learnMore} style={{marginLeft:"0px",textDecoration:"None"}}>Learn More A<i class="fa-solid fa-arrow-right-long p-2"></i></a>
          </div>
          {/* <div className="mt-3">
          <a href={googlePlay}>
            <img src="media/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            <img src="media/appStoreBadge.svg" style={{marginLeft:"50px"}} />
          </a>
          </div> */}
        </div>
        <div className="col-6  ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
