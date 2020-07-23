import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home";
import Search from "./pages/Search";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import Navbar from "./Components/Navbar";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user-details/:userName" component={UserDetails} />
        <Route exact path="/about" component={About} />
        <Redirect to="/home" component={Home} />
      </Switch>
    </div>
  );
}
