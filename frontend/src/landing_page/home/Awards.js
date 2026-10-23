import React from 'react'

function Awards() {
  return ( 
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-5 text-center">
          <img src="media/images/largestBroker.svg" alt="LargestBroker.svg" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <h1>Largest Stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
          <div className="row">
            <div className="col-12 col-sm-6 p-sm-5 p-3">
          <ul>
            <li><p>Futures and Options</p></li>
            <li><p>Commodity derivatives</p></li>
            <li><p>Currency derivatives</p></li> 
          </ul>
            </div>
            <div className="col-12 col-sm-6 p-sm-5 p-3">
          <ul>
            <li><p>Stocks & IPOs</p></li>
            <li><p>Direct mutual funds</p></li>
            <li><p>Bonds and Govt. Securities</p></li> 
          </ul>
            </div>
          <img src="media/images/pressLogos.png" alt="PressLogos" style={{width:"90%"}} />
          </div>
        </div>
      </div>
    </div>
   );
}

export default Awards;