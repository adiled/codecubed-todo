import React from 'react'
import styled from 'styled-components'

const Logo = styled.p`
  font-size: 50px; text-align: center; display: block; margin: 20px;
  font-weight: 900; text-transform: uppercase; letter-spacing: -12px;
  color: ${props => props.inverted ? '#fff' : 'rgb(154,70,255)'}
`

export default (props) => (
    <Logo {...props}>CUBEDTODO</Logo>
  )