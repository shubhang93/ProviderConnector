import React, { Component } from 'react';
import TestButton from './TestComponent';
import { Connect } from './ProviderConnector';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div>
        <p style={{ color: this.props.contextStore.color }}>TestComponent</p>
        <TestButton />
      </div>
    );
  }
}

export default Connect({ contextStore: PropTypes.object })(App);
