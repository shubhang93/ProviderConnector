/**
 * Created by shubhang on 2/7/17.
 */
import React from 'react';
import { Connect } from './ProviderConnector';

const TestButton = props => {
  return <button style={{ color: props.contextStore.color }}>Click</button>;
};

export default Connect()(TestButton);
