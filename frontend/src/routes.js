import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import LandingPage from './components/LandingPage';
<<<<<<< HEAD
import SongList from './components/SongList';
=======
import Login from './components/Login';
import Register from './components/Register';

>>>>>>> 1dda5ed7884fcc042e38a70c5ee61bc3098f040f


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
<<<<<<< HEAD
            <Route exact path='/hello_world' component={HelloWorld} />
            <Route exact path='/song_list' component={SongList} />
=======
>>>>>>> 1dda5ed7884fcc042e38a70c5ee61bc3098f040f
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;