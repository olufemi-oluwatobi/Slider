import React, { Component } from "react";
import "./index.scss";
import Slide from "../../slide";
import { Icon } from "antd";
class Slider extends Component {
  state = {
    activeSlide: 0
  };
  componentDidMount() {
    this.props.getImages();
    this.automateSlide();
  }
  automateSlide() {
    setInterval(() => this.nextSlide(), 9000);
  }
  nextSlide() {
    let slide =
      this.state.activeSlide + 1 < this.props.images.length
        ? this.state.activeSlide + 1
        : 0;
    this.setState({
      activeSlide: slide
    });
  }

  previousSlide() {
    let slide =
      this.state.activeSlide - 1 < 0
        ? this.props.images.length - 1
        : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide
    });
  }

  render() {
    const { images } = this.props;

    return (
      <div className="slider">
        {images.map((image, index) => (
          <Slide
            background={image.url}
            active={index === this.state.activeSlide}
            link={image.link}
          />
        ))}
        <div className="slider__next" onClick={() => this.nextSlide()}>
          <Icon
            style={{ fontSize: "100px", color: "rgb(177, 137, 128)" }}
            theme="outlined"
            type="right"
          />
        </div>
        <div className="slider__previous" onClick={() => this.previousSlide()}>
          <Icon
            style={{ fontSize: "100px", color: "rgb(177, 137, 128)" }}
            theme="outlined"
            type="left"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
