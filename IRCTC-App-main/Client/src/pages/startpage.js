import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="osahan-index bg-c d-flex align-items-center justify-content-center vh-100 index-page">
      <div className="text-center">
        <a href="/landing">
          <i className=" text-white display-1 bg-danger p-4 rounded-circle">
            <img src="img/ps1.gif" />
          </i>

        </a>
        <br />
        <div className="spinner"></div>
      </div>
      <div className="osahan-fotter fixed-bottom m-3">
        <Link
          className="btn btn-block px-4 py-3 d-flex align-items-center osahanbus-btlan btn-danger text-white shadow"
          to="landing"
        >
          Get Started <i className="icofont-arrow-right ml-auto"></i>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
