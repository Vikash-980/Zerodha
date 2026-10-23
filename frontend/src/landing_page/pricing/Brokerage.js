import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
        <div className="row p-sm-5 p-3 mt-5 text-center border-top">
            <div className="col-12 col-md-8 p-4 text-muted">
                <h4 style={{color:"#387ed1"}}>Brokerage calculator</h4>
                <ul className='mt-4' style={{fontSize:"0.8rem",textAlign:"left",lineHeight:"2.5"}}>
                    <li>Call & Trade RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will ve sent via e-mail</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>

                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>

                    <li>if the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
            <div className="col-12 col-md-4 p-4">
                <h4 style={{color:"#387ed1"}}>List of charges</h4>

            </div>
        </div>
    </div>
  )
}

export default Brokerage
