import React from "react";

const Footer = () => {
  return (
    <div className="fixed-bottom p-3">
      <div className="footer-menu row m-0 bg-danger shadow rounded-2">
        <div className="col-3 p-0 text-center">
          <a href="/" className="home text-white active">
            <span className="icofont-ui-home h5"></span>
            <p className="mb-0 small">Home</p>
          </a>
        </div>
        <div className="col-3 p-0 text-center">
          <a href="/" className="home text-white">
            <span className="icofont-ticket h5"></span>
            <p className="mb-0 small">My Tickets</p>
          </a>
        </div>
        <div className="col-3 p-0 text-center">
          <a href="/" className="home text-white">
            <span className="icofont-notification h5"></span>
            <small className="osahan-n">4</small>
            <p className="mb-0 small">Notice</p>
          </a>
        </div>
        <div className="col-3 p-0 text-center">
          <a href="/" className="home text-white">
            <span className="icofont-user h5"></span>
            <p className="mb-0 small">Account</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
