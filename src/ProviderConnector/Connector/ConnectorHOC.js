import React from "react";

const ConnectorHOC = contextTypes => Component => {
  const ConnectedComponent = (props, context) =>
    <Component {...props} {...context} />;
  ConnectedComponent.contextTypes = contextTypes;
  return ConnectedComponent;
};

export default ConnectorHOC