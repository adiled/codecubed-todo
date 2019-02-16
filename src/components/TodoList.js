import React from 'react'
import styled from 'styled-components'

const TodoList = styled.div`
    position: relative; max-width: 500px; margin: 30px auto; padding: 5px 10px;
    background: #dfdfdf; border-radius: 5px; background: linear-gradient(90deg, rgba(248,197,252,1) 0%, rgba(200,91,194,0.6166841736694677) 38%, rgba(154,70,255,1) 100%);
  `

export default (props) => (
  <TodoList>
    {props.children}
  </TodoList>
)