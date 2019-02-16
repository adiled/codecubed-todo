import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.form`
  padding: 30px; 
  background: white;
`

const Input = styled.input`
  margin: 20px; display: block;
  border: 0; box-shadow: 0 0 0 1px #dfdfdf; padding: 20px; border-radius: 5px;
`

export default ({confirmLogin}) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e, field) => {
    let update = {}
    update[field] = e.target.value
    setCredentials(Object.assign(Object.create(credentials), update))

  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    confirmLogin(credentials)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input placeholder="Username" type="text" onChange={(e) => handleChange(e, 'username')} />
      <Input placeholder="Password" type="password" onChange={(e) => handleChange(e, 'password')} />
      <center><Button>Log In</Button></center>
    </Container>
    )
}