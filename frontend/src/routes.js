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
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/hello_world' component={HelloWorld} />
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;