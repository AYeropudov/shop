import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
        <Routes history={ history }/>,
    document.getElementById('root')
);
registerServiceWorker();
