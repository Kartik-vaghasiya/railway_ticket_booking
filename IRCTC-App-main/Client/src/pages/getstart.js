import React from "react";
import { Link } from "react-router-dom";

const GetStartPage = () => {
  return (
    <div className="py-4 d-flex align-items-center justify-content-center">
      <div className="osahan-started pt-2 text-center">
        <img
          src="/img/sign-in-pana.svg"
          className="img-fluid mb-2 col-9 mx-auto"
          alt="Sign In"
        />
        <div className="head py-4 px-4 text-center">
          <h5 className="font-weight-bold mb-4">
            Start by creating an account.
          </h5>
          <p className="text-muted">
            I'm an early bird and I'm a night owl, so I'm
            <br />
            wise and I have worms.
          </p>
        </div>
        <div className="fixed-bottom p-4">
          <Link
            to="/signup"
            className="btn btn-block btn-danger mb-3 osahanbus-btn"
          >
            CREATE AN ACCOUNT
          </Link>
          <Link to="/signin" className="btn btn-block btn-light osahanbus-btn">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStartPage;
