import React from 'react'
import { Link } from "react-router-dom";

function Pricing() {
    return ( 
        <div className="container p-sm-5 p-3">
            <div className="row p-sm-5 p-3">
                <div className="col-12 col-md-5 mb-4">
                    <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>

                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <Link to="/pricing">See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>

                </div>
                <div className="col-12 col-md-7">
                    <div className="row text-center">
                        <div className="col border p-2 py-4">
                            <h1 className='mb-4'>₹ 0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-2 py-4">
                            <h1 className='mb-4'>₹ 20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;