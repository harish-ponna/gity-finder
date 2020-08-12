import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/About.css";
function About(props) {
  return (
    <div className="About">
      <h1>About gity-finder</h1>
      <p>
        gity-finder is a deceptively simple web application which searches GitHub
        for user profiles and returns them in a responsive grid. What makes this
        app stand out from similar web developer portfolio projects is the sharp
        attention to detail and 100% from-scratch code incorporating the various
        modern react technologies.
      </p>
    </div>
  );
}

export default withRouter(About);
