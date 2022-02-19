import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Here</h3>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block marginTop"
        disabled={!validateForm()}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        New User?
        {' '}
        <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
