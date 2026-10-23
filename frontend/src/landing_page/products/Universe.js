import React from 'react'

const Universe = () => {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1 className='mb-4 fs-3'>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{width:"50%"}}/>
          <p className='text-small text-muted mt-3' style={{fontSize:"0.8rem"}}>Our asset management venture <br />
that is creating simple and transparent index <br />
funds to help you save for your goals.
</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{width:"60%"}}/>
          <p className='text-small text-muted mt-3'style={{fontSize:"0.8rem"}}>
Options trading platform that lets you <br />
create strategies, analyze positions, and examine <br />
data points like open interest, FII/DII, and more.
</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="media/images/tijori.svg" alt="Tijori" style={{width:"40%"}} />
          <p className='text-small text-muted mt-2' style={{fontSize:"0.8rem"}}>Investment research platform <br />
that offers detailed insights on stocks, <br />
sectors, supply chains, and more.
</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="Streak" style={{width:"40%"}}/>
          <p className='text-small text-muted mt-3' style={{fontSize:"0.8rem"}}>Systematic trading platform <br />
that allows you to create and backtest <br />
strategies without coding.</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.8rem"}}>Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Ditto" style={{width:"40%"}}/>
          <p className='text-small text-muted mt-3' style={{fontSize:"0.8rem"}}>Personalized advice on life <br />
and health insurance. No spam <br />
and no mis-selling.</p>
        </div>
        
        <a
          href="/signup"
          className="p-2 btn btn-primary fs-5 mb-5 w-50 mx-auto"
        >
          Signup Now
        </a>

      </div>
    </div>
  )
}

export default Universe
