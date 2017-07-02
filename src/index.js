import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './ProviderConnector';
import registerServiceWorker from './registerServiceWorker';

const contextStore = { color: 'purple' };

ReactDOM.render(
  <Provider contextStore={contextStore}><App /></Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
