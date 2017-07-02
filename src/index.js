import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './ProviderConnector';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
