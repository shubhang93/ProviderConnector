/**
 * Created by shubhang on 2/7/17.
 */
import React, { Component } from 'react';

const TestButton = props => {
  console.log({ props });
  return <button style={props.buttonTheme}>Click</button>;
};

export default TestButton
