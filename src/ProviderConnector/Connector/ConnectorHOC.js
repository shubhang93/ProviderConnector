import React from 'react';

const ConnectorHOC = contextTypes => Component => {
  console.log({ contextTypes });
  const ConnectedComponent = (props, context) => {
    console.log({ context });
    return <Component {...props} {...context} />;
  };
  ConnectedComponent.contextTypes = contextTypes;
  return ConnectedComponent;
};

export default ConnectorHOC;
