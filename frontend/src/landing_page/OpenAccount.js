import React from 'react'

function OpenAccount() {
    return ( 
      <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <a
          href="/signup"
          className="btn btn-primary fs-5 mb-5 mx-auto px-4 py-2"
          style={{ whiteSpace: "nowrap", minWidth: "200px", maxWidth: "300px", width: "auto" }}
        >
          Sign up for free
        </a>
      </div>
    </div>
     );
}

export default OpenAccount;