import React from 'react'
import styled from 'styled-components'

const TodoList = styled.div`
    position: relative; max-width: 500px; margin: 30px auto; padding: 5px 10px;
    background: #dfdfdf; border-radius: 5px;
  `

export default (props) => (
  <TodoList>
    {props.children}
  </TodoList>
)