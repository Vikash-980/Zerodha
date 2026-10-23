import React from 'react'
import { Link } from "react-router-dom";

function Stats() {
    return ( 
        <div className="container p-3 mb-5">
            <div className="row p-sm-5 p-3">
                <div className="col-12 col-md-6 p-sm-5 p-3">
                    <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="col-12 col-md-6 p-sm-5 p-3 text-center">
                    <img src="media/images/ecosystem.png" alt="ecosystem.png" className="img-fluid" />
                    <div className='text-center'>
                        <Link to="/product" className='mx-5'>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        <a href="https://kite.zerodha.com/">Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;