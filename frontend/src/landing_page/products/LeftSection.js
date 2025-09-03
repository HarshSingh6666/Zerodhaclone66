import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mb-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="mb-5">
            <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo <i class="fa-solid fa-arrow-right-long p-2"></i></a>

            <a href={learnMore} style={{marginLeft:"90px",textDecoration:"None"}}>Learn More A<i class="fa-solid fa-arrow-right-long p-2"></i></a>
          </div>
          <div className="mt-3">
          <a href={googlePlay}>
            <img src="media/googlePlayBadge.svg" />
          </a>

          <a href={appStore}>
            <img src="media/appStoreBadge.svg" style={{marginLeft:"50px"}} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
