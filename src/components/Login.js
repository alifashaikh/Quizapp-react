import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "./PostData";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
      // redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if (this.state.email && this.state.password) {
      PostData("login", this.state).then(result => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
    console.log(e.target.value);
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="box" id="Body">
        <div className="medium-5 columns left">
          <h4>Sign In</h4>
          <br></br>
          <center>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e, value) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
            {console.log(this.state)}

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e, value) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />

            <input
              type="submit"
              className="button success"
              value="Login"
              onClick={this.login}
            />
          </center>
        </div>
      </div>
    );
  }
}

export default Login;
