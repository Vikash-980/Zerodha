import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="mb-3 fs-2">Pricing</h1>
        <h5 className="text-muted fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h5>
      </div>

      <div className="row p-sm-5 p-3 text-center">
        <div className="col-12 col-md-4 p-sm-5 p-3">
          <img src="media/images/pricingEquity.svg" alt="Equity delivery pricing" style={{ width: "80%" }} />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-sm-5 p-3">
          <img src="media/images/intradayTrades.svg" alt="Intraday and F&O pricing" style={{ width: "80%" }} />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-sm-5 p-3">
          <img src="media/images/pricingEquity.svg" alt="Direct mutual fund pricing" style={{ width: "80%" }} />
          <h3 className="mb-4">Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
