/**
 * Created by shubhang on 2/7/17.
 */
import React from 'react';
import { Connect } from './ProviderConnector';
import PropTypes from 'prop-types';
const TestButton = props => {
  return <button style={{ color: props.contextStore.color }}>Click</button>;
};

export default Connect({ contextStore: PropTypes.Object })(TestButton);
