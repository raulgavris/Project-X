import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import BaseRouter from '../../routes';
import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <BaseRouter />
        </Router>
      </div>
    </Provider>
  );
}

export default App;