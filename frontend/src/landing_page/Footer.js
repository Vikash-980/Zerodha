import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid border-top mt-5 bg-body-tertiary foot-a">
        <div className="row mt-5 p-sm-5 p-3">
          <div className="col-12 col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Logo.svg"
              style={{ width: "70%" }}
            />
            <br />
            <p className="d-block mt-3 text-muted" style={{fontSize:"14px"}}>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <p className="foot-main-p">Company</p>
            <a href="/about" className="text-muted d-block mb"> About</a> <br />
            <a href="/about" className="text-muted d-block mb"> Philosophy</a> <br />
            <a href="https://zerodha.com/about/" className="text-muted d-block mb"> Press &amp; media</a> <br />
            <a href="https://zerodha.com/careers/" className="text-muted d-block mb"> Careers</a> <br />
            <a href="https://zerodha.com/about/" className="text-muted d-block mb"> Zerodha Cares (CSR)</a> <br />
            <a href="https://zerodha.tech/" className="text-muted d-block mb"> Zerodha.tech</a> <br />
            <a href="https://github.com/zerodha" className="text-muted d-block mb"> Open source</a> <br />
          </div>    
          
            <div className="col-12 col-sm-6 col-md-3 mb-4">
            <p className="foot-main-p">Support</p>
            <a href="/support" className="text-muted d-block mb">Contact us </a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Support portal </a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">How to file a complaint? </a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Status of your complaints </a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Bulletin </a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Circular </a> <br />
            <a href="https://zerodha.com/z-connect/" className="text-muted d-block mb">Z-Connect blog </a> <br />
            <a href="https://zerodha.com/resources/" className="text-muted d-block mb">Downloads </a> <br />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <p className="foot-main-p">Account</p>
            <a href="/signup" className="text-muted d-block mb">Open demat account</a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Minor demat account</a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">NRI demat account</a> <br />
            <a href="https://zerodha.com/products/" className="text-muted d-block mb">Commodity</a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Dematerialisation</a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">Fund transfer</a> <br />
            <a href="https://support.zerodha.com/" className="text-muted d-block mb">MTF</a> <br />
            <a href="https://zerodha.com/" className="text-muted d-block mb">Referral program</a> <br />
          </div>
        </div>

        <div className="row p-sm-5 p-3">
          <div className="mt-5 text-muted foot-font col-12">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to 
               <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com.</a> Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on <a href="https://scores.sebi.gov.in/">SEBI SCORES</a>: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a href="https://smartodr.in/">Smart Online Dispute Resolution</a> | <a href="https://zerodha.com/complaint/">Grievances Redressal Mechanism</a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. <a href="https://www.nseindia.com/">NSE broker
              factsheet</a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please <a href="https://support.zerodha.com/">create a ticket here</a>.
            </p>

            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
          <div className="col-12"></div>
        </div>
        <div className="row mb-5 p-sm-5 p-3">
          <div className="col-12 foot-span text-center">
            <span>NSE</span> <span>BSE</span> <span>MCX</span>{" "}
            <span>Terms & conditions</span> <span>Policies & procedures</span>{" "}
            <span>Privacy policy</span> <span>Disclosure</span>{" "}
            <span>For investor's attention</span> <span>Investor charter</span>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
