import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import 'semantic-ui-css/semantic.min.css';


const history = createBrowserHistory();

ReactDOM.render(
        <Routes history={ history }/>,
    document.getElementById('root')
);
registerServiceWorker();
