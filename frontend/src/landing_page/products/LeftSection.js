import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row mt-5 p-sm-5 p-3">
        <div className="col-12 col-md-4 p-sm-5 p-3 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-12 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-5 p-sm-5 p-3 mt-md-5 mt-3">
          <h1 className="fs-4 mb-4 ">{productName}</h1>
          <p style={{fontSize:"1.1rem"}}>{productDescription}</p>

          <div className="mt-4 d-flex align-items-center flex-wrap gap-4">
          {tryDemo && <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>}
          {learnMore && <a href={learnMore}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>}
          </div>

          <div className="mt-4 d-flex align-items-center flex-wrap gap-4">
          {googlePlay && <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>}
          {appStore && <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store" /></a>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSection;
