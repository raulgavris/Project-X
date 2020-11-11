import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';



const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;