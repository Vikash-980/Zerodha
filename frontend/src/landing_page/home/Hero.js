import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Zerodha investment platform"
          className="mb-5 img-fluid"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <a
          href="/signup"
          className="btn btn-primary fs-5 mb-5 mx-auto px-4 py-2"
          style={{ whiteSpace: "nowrap", minWidth: "200px", maxWidth: "300px", width: "auto" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
};

export default Hero;