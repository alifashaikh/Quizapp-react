import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";

class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: [],
  //     userFeed: "",
  //     redirectToReferrer: false,
  //     name: ""
  //   };
  // }
  // componentWillMount() {
  //   if (sessionStorage.getItem("userData")) {
  //     this.getUserFeed();
  //   } else {
  //     this.setState({ redirectToReferrer: true });
  //   }
  // }
  render() {
    // if (this.state.redirectToReferrer) {
    //   return <Redirect to={"/login"} />;
    // }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App</title>
        </Helmet>
        <div id="home">
          <section>
            <center>
              <div style={{ textAlign: "center" }}></div>
              <h1 className="animated infinite tada">General Trivia</h1>
              <div className="play-button-container">
                <ul>
                  <li>
                    <Link className="play-button" to="/play/instructions">
                      Play
                    </Link>
                  </li>
                </ul>
              </div>
            </center>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Home;
