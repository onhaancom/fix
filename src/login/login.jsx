import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="form">
        {isRegistering ? (
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" required />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Email Address" required />
            <button type="submit">Create</button>
            <p className="message">
              Already registered?{" "}
              <a href="#" onClick={toggleForm}>
                Sign In
              </a>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" required />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
            <button type="submit"><a href="/">Login</a></button>
            <p className="message">
              Not registered?{" "}
              <a href="#" onClick={toggleForm}>
                Create an account
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
