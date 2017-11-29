import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <BrowserRouter {...props}>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;