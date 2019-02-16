import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex; align-items: center; justify-content: center; margin: 20px 0 20px auto; width: 200px; 
font-weight: bold; color: #777;
> * { margin: 0 5px;}
`

const Avatar = styled.div`
  border-radius: 20px; background: #dfdfdf; width: 50px; height: 30px;
  `

export default () => {
  return (
    <Container>
      <Avatar></Avatar>
      <p>Colin Ricardo</p>  
    </Container>
    )
  
}