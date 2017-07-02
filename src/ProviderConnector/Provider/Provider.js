import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { exclude } from '../util';

const CHILDREN = 'children';

class Provider extends Component {
  getChildContext() {
    return exclude(CHILDREN)(this.props);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  contextStore: PropTypes.object,
};

Provider.propTypes = {
  contextStore: PropTypes.object.isRequired,
};

export default Provider;
