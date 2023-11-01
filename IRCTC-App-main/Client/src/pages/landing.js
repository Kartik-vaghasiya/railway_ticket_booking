import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing-page bg-danger">
      <div className="osahan-slider m-0">
        <div className="osahan-slider-item text-center">
          <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
            <i className="icofont-globe display-3 text-white"></i>
            <h5 className="mt-4 mb-3 text-white">
              Book your online bus ticket
            </h5>
            <p className="text-center text-white-50 mb-5 px-4">
              I'm not superstitious, but I am a little stitious.
            </p>
          </div>
        </div>
        <div className="osahan-slider-item text-center bg-white">
          <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
            <i className="icofont-bus display-3 text-danger"></i>
            <h5 className="mt-4 mb-3 text-danger">
              Digital Bus Management System
            </h5>
            <p className="text-center text-dark-50 mb-5 px-4">
              I'm not superstitious, but I am a little stitious.
            </p>
          </div>
        </div>
        <div className="osahan-slider-item text-center">
          <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
            <i className="icofont-notification display-3 text-white"></i>
            <h5 className="mt-4 mb-3 text-white">
              Through notifications keep yourself updated
            </h5>
            <p className="text-center text-white-50 mb-5 px-4">
              I'm not superstitious, but I am a little stitious.
            </p>
          </div>
        </div>
      </div>
      <div className="osahan-fotter fixed-bottom m-3">
        <Link
          to="/getstart"
          className="btn bg-white text-danger border-danger btn-block osahanbus-btlan"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
