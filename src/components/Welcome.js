import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Welcome = () => (
  <Fragment>
    <Helmet>
      <title>Quiz App</title>
    </Helmet>
    <div id="welcome">
      <section>
        <div style={{ textAlign: "center" }}>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h1 className="animated infinite bounce">Welcome</h1>
        <p>
          Are you a genius when it comes to Quiz?!<br></br>Login to test your
          brains out!!!{" "}
        </p>
        <div className="auth-container">
          <Link to="/login" className="auth-buttons" id="login-button">
            Login
          </Link>
          <Link to="/register" className="auth-buttons" id="signup-button">
            Sign up
          </Link>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Welcome;
