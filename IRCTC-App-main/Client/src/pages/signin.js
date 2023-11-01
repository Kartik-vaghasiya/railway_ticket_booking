import React from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/actions/userAction";

const Signin = () => {
  const { users } = useSelector(state => state.usersReducers);
  const dispatch = useDispatch();
  function login(values) {
    const existingUser = users.find(user => user.email === values.email);
    if (!existingUser) {
      message.error('Email Does not Exits');
    } else if (existingUser && !existingUser.isVerified) {
      message.error('Please First Veriy the Email')
    } else {
      dispatch(loginUser(values));
    }
  }
  return (

    <div className="osahan-signup">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/getstart">
            <i className="icofont-rounded-left"></i>
          </a>
          Sign in to your account
        </h5>
      </div>
      <div className="px-3 pt-3 pb-5">
        <form action={login}>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Your Email</label>
            <input type="email" className="form-control" placeholder="Enter Your Email" name="email" />
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Password</label>
            <input type="password" className="form-control" placeholder="Enter Your Password" name="password" />
          </div>
          <div className="text-right mb-3">
            <a href="change-password.html" className="text-muted small"> Forgot your password? </a>
          </div>
          <button type="submit" className="btn btn-danger btn-block osahanbus-btn mb-4 rounded-1">  SIGN IN  </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
