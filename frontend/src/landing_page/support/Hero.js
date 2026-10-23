import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="https://support.zerodha.com/">Track Tickets</a>
      </div>

      <div className="row p-sm-5 p-3">
        <div className="col-12 col-md-1 d-none d-md-block"></div>
        <div className="col-12 col-md-5 p-sm-5 p-3">
          <h4>Search for an answer or browse help topics <br /> to create a ticket</h4>

              <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg. how do i activate F&O, why is my order getting rejected.."/>

          <br />
          <a href="https://support.zerodha.com/">Track account opening</a>
          <a href="https://support.zerodha.com/">Track segment activation</a>
          <a href="https://support.zerodha.com/">Intraday</a> <br />
          <a href="https://support.zerodha.com/">margins</a>
          <a href="https://support.zerodha.com/">Kite user manual</a>
        </div>
        <div className="col-12 col-md-1 d-none d-md-block"></div>
        <div className="col-12 col-md-5 p-sm-5 p-3 pt-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="https://support.zerodha.com/">Current Takeovers and Delisting - Feb 2026</a> <br />
            </li>
            <li>
              <a href="https://support.zerodha.com/">Latest Intraday leverages - MIS &amp; CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
