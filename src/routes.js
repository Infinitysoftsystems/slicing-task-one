import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './ui-components/NotFound/NotFound';

// simple routing is introduced for now, we can include private routes which works with authentication

const routes = () => (
    <Router >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default routes;
