import React, {useContext} from 'react'
import Context from '../store'
import {Redirect} from 'react-router-dom';

import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'

const pageLayout = {
  minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column',
  background: 'linear-gradient(90deg, rgba(248,197,252,1) 0%, rgba(200,91,194,0.6166841736694677) 38%, rgba(154,70,255,1) 100%)'
}

const Login = () => {
  const context = useContext(Context)

  if(context.store.state.authenticated) {
    return (
    <Redirect to='/my' />
    )
  }

  return (
    <div style={pageLayout}>
      <Logo inverted></Logo>
      <LoginForm 
      confirmLogin = {
        (credentials) => context.store.dispatch({type: 'login', payload: credentials})
      }>
      </LoginForm>
    </div>
    )

}

export default Login