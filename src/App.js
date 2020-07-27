import React, { Component } from "react";

import Home from "./page/home";
import About from "./page/about";
import Profile from "./page/profile";
import Nav from "./Nav";
import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
