import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Slider from "./features/signup/container";
require("dotenv").config();
class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Slider} />
        </main>
      </div>
    );
  }
}

export default App;
