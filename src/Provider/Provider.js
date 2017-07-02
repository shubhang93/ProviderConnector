import React, { Component } from "react";
import PropTypes from "prop-types";

class Provider extends Component {
  getChildContext() {
    return this.props.contextStore;
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
    contextStore: PropTypes.object
}

Provider.propTypes = {
    contextStore:PropTypes.object.isRequired
}

export default Provider;
