import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chatty from './Chatty';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chatty />, document.getElementById('root'));
registerServiceWorker();
