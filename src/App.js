import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './app.css';
import Context, {Store} from './store'

import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Login from './pages/Login'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(Context)
  return (
  <Route {...rest} render={(props) => (
    context.store.state.authenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
}

const App = () => {

  useEffect(() => {
    document.title = 'CUBEDTODO';
  })

  return (
  <Store> 
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/my" component={Dashboard}/>
      </div>
    </Router>
  </Store>
)
}

export default App