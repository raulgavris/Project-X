import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SongList from './components/SongList';
import Login from './components/Login';
import Register from './components/Register';



const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/song_list' component={SongList} />
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;