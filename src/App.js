import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './app.css';
import {Store} from './store'

import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Login from './pages/Login'

const App = () => (
  <Store> 
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/my" component={Dashboard}/>
      </div>
    </Router> 
  </Store>
)

export default App