import React from 'react'

function Education() {
  return ( 
    <div className="container mt-5">
            <div className="row">

              <div className="col-12 col-md-6 mb-5 text-center">
                    <img src="media/images/education.svg" alt="Market education" className="img-fluid" style={{maxWidth:"80%"}}/>
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col-12 col-md-6 p-sm-5 p-3">
                    <h1 className='mb-4 fs-3'>Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href="https://zerodha.com/varsity/">Varsity<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <div className='mb-3'></div>
                    
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    
                    <a href="https://tradingqna.com/">TradingQ&amp;A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>

                
            </div>
        </div>
   );
}

export default Education;