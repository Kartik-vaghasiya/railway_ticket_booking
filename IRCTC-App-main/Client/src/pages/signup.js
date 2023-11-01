import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { Form, Input, Button } from 'antd';
import { signupUser } from '../Redux/actions/userAction';

function Signup() {
  const { users } = useSelector(state => state.usersReducers);
  const dispatch = useDispatch();

  async function handleSignup(values) {
    const existingUser = users.find(user => user.email === values.email);

    if (existingUser) {
      console.log(values);
      message.error('Email already exists');
    } else if (values.password !== values.cnfpassword) {
      message.error('Password mismatch');
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
    ) {
      message.error('Password Should be Strong');
    } else {
      try {
        await dispatch(signupUser(values));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="osahan-signup">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/getstart">
            <i className="icofont-rounded-left"></i>
          </a>
          Create an account
        </h5>
      </div>
      <div className="p-3">
        <Form onFinish={handleSignup} layout="vertical">
          <Form.Item name="email" label="Your Email" rules={[{ required: true, message: 'Email is required' }]}>
            <Input type="email" placeholder="Enter Your Email" />
          </Form.Item>

          <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Username is required' }]}>
            <Input type="text" placeholder="Enter Your Username" />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password is required' }]}>
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>
          <p className="text-muted text-bold text-left small">
            Password must be a minimum of 8 characters and must contain lowercase, uppercase, a special character, and a numeric digit.
          </p>

          <Form.Item name="cnfpassword" label="Confirm Password" rules={[{ required: true, message: 'Password is required' }]}>
            <Input.Password placeholder="Confirm Your Password" />
          </Form.Item>

          <Button
            htmlType="submit"
            className="btn btn-danger btn-block osahanbus-btn mb-3 rounded-1 mt-4"
          >
            CREATE AN ACCOUNT
          </Button>

          <p className="text-muted text-center small">
            By signing up, you agree to our Privacy Policy and Terms.
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
