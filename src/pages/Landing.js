import React, {useContext} from 'react'
import {Link} from 'react-router-dom';

// import Context from '../store'
import Logo from '../components/Logo.js'
import Button from '../components/Button.js'

const pageLayout = {
  minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column',
  background: '#fff', boxShadow: '0 0 0 5px rgb(154,70,255) inset'
}

//

const Landing = () => {
  // const context = useContext(Context)

  return (
    <div style={pageLayout}>
      <Logo></Logo>
      <Link to="/my">
      <Button>LET'S ORGANIZE!</Button>  
      </Link>
      
    </div>
    )

}

export default Landing