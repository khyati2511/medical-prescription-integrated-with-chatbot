import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userCreds, setUserCreds] = useState({
    firstname: '', lastname: '', username: '', email: '', password: '', confirmPassword: '',
  });

  function validateForm() {
    return userCreds.email.length > 0 && userCreds.password.length > 0
     && userCreds.confirmPassword > 0
     && userCreds.firstname.length > 0 && userCreds.lastname.length > 0 && userCreds.username > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Register Here</h3>
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              className="form-control"
              placeholder="Enter First name"
              value={userCreds.firstname}
              onChange={(e) => setUserCreds({
                ...userCreds,
                firstname: e.target.value,
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              placeholder="Enter Last name"
              value={userCreds.lastname}
              onChange={(e) => setUserCreds({ ...userCreds, lastname: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter User name"
              value={userCreds.username}
              onChange={(e) => setUserCreds({ ...userCreds, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={userCreds.email}
              onChange={(e) => setUserCreds({ ...userCreds, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              className="form-control"
              placeholder="Enter password"
              value={userCreds.password}
              onChange={(e) => setUserCreds({ ...userCreds, password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpwd">Confirm Password</label>
            <input
              type="password"
              id="cpwd"
              className="form-control"
              placeholder="Re Enter password"
              value={userCreds.confirmPassword}
              onChange={(e) => setUserCreds({ ...userCreds, confirmPassword: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block marginTop"
            disabled={!validateForm()}
          >
            Sign Up

          </button>
          <p className="forgot-password text-right">
            Already registered?
            {' '}
            <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
