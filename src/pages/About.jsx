import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/About.css";
function About(props) {
  return (
    <div className="About">
      <h1>About GitFinder</h1>
      <p>
        GitFinder is a deceptively simple web application which searches GitHub
        for user profiles and returns them in a responsive grid. What makes this
        app stand out from similar web developer portfolio projects is the sharp
        attention to detail and 100% from-scratch code incorporating the various
        modern react technologies.
      </p>
    </div>
  );
}

export default withRouter(About);
