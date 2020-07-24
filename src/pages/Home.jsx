import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/home.css";

function Home(props) {
  return (
    <div className="Home">
      <p>Start searching git users and repos</p>
      <p>by</p>
      <h3>
        gity-<span>f</span>inder
      </h3>
      <Link className="btn" to="/search">
        Get Started
      </Link>
    </div>
  );
}

export default withRouter(Home);
