import React from 'react';
import PropTypes from 'prop-types';
const ConnectorHOC = () => Component => {
  const ConnectedComponent = (props, context) => {
    return <Component {...props} {...context} />;
  };
  ConnectedComponent.contextTypes = { contextStore: PropTypes.object };
  return ConnectedComponent;
};

export default ConnectorHOC;
