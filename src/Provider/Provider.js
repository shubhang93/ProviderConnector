import React, { Component } from "react";
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return this.props;
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Provider;
