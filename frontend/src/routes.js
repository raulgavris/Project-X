import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import LandingPage from './components/LandingPage';
import SongList from './components/SongList';


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/hello_world' component={HelloWorld} />
            <Route exact path='/song_list' component={SongList} />
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;