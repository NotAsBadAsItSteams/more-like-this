import React from 'react';
import PropTypes from 'prop-types';

const INTERVAL_LENGTH = 1000;

class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      currentImage: props.screenshots[0],
    };
    this.changeScreenshot = this.changeScreenshot.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.changeScreenshot, INTERVAL_LENGTH);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeScreenshot() {
    let nextImageIndex;
    if (this.state.currentImageIndex === (this.props.screenshots.length - 1)) {
      nextImageIndex = 0;
    } else {
      nextImageIndex = this.state.currentImageIndex + 1;
    }
    this.setState({
      currentImageIndex: nextImageIndex,
      currentImage: this.props.screenshots[nextImageIndex],
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.currentImage} alt="game screenshot" />
      </div>
    );
  }
}

Screenshots.propTypes = {
  screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Screenshots;
