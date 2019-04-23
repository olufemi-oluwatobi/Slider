import React, { Component } from "react";
import "./index.scss";

class Slide extends Component {
  render() {
    let { background } = this.props;
    let { active } = this.props;

    let slideStyle = {
      backgroundImage: "url(" + background + ")"
    };

    return <div className="slide" data-active={active} style={slideStyle} />;
  }
}
export default Slide;
