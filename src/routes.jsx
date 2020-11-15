// dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// views
import App from './views/home/App.jsx';


export const Routes = (
    <Switch>
        <Route exact path="/404" render={() => <h1>NOT FOUND</h1>} />
        <Route path="/" component={App} />
    </Switch>
);