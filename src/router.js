import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import SimpleSegment from "./components/SimpleSegment/index";
import Delivery from "./components/ContentDelivery/index";
import Catalog from "./components/Catalog";

const Routes = (props) => (
    <BrowserRouter {...props}>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/delivery" render={()=> <SimpleSegment content={<Delivery/>}/>} />
        <Route path="/payments" render={() => <SimpleSegment/>} />
        <Route path="/catalog" render={() => <Catalog/>} />
        <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;