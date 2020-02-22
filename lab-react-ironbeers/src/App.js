import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Beers from './components/Beers.js';
import Singlebeer from './components/Singlebeer.js';
import { Switch, Route } from 'react-router-dom';
import Randombeer from './components/Randombeer';
import Newbeer from './components/Newbeer';

function App() {
  return (
    <div className="App">
        <Switch> {/* 👈 rend 1 seule des 2 routes */}
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/:id' component={Singlebeer}/>
          <Route path='/random' component={Randombeer}/>
          <Route path='/new' component={Newbeer}/>
        </Switch>
    </div>
  );
}

export default App;
