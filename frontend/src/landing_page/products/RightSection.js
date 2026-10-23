import React from "react";

const RightSection = ({ imageURL, productName, productDescription, linkValue }) => {
  return (
    <div className="container">
      <div className="row mt-5 p-sm-5 p-3">
        <div className="col-12 col-md-4 p-sm-5 p-3 mt-md-5 order-2 order-md-1" >
          <h1 className="fs-4 mb-4" style={{marginTop:"6rem"}}>{productName}</h1>
          <p style={{ fontSize: "1.1rem" }}>{productDescription}</p>
          <div>
            <a href="https://zerodha.com/products/">{linkValue} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="col-12 col-md-2 d-none d-md-block order-md-2"></div>

        <div className="col-12 col-md-6 text-center mb-4 order-1 order-md-3">
          <img src={imageURL} alt={productName} className="img-fluid" style={{maxWidth:"90%"}} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
