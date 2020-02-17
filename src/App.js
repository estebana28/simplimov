import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';

import './App.css';

function App() {

  return (
    <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
    </HashRouter>
  );
}

export default App;
