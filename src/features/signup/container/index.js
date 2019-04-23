import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getImages } from "../actions";
import Slider from "../components/index";

const mapStateToProps = ({ imageData }) => ({
  images: imageData.images
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getImages
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
