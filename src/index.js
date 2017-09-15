import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routes from './routes';
import Store, { history } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes store={Store} />, document.getElementById('root'));
registerServiceWorker();
