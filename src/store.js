import React, {useState, useReducer} from 'react'
const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {

    case 'addTodoItem':
    return {todoList: [action.payload].concat(state.todoList)}
    
    case 'markTodoItemComplete':
    // update inside the list directly
    return {todoList: [action.payload].concat(state.todoList)}
    
    default:
    throw new Error('Booh')
  }
}

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    name: 'Adil',
    email: 'abdu@adils.me',
    todoItemDefault: {
      id: null,
      description: '',
      status: 'pending'
    },
    todoList: [
    {
      id: 1,
      description: 'Fire the cat',
      status: 'pending'
    },
    {
      id: 2,
      description: 'Feed the mouse',
      status: 'complete'
    }
    ]
  });

  return <Context.Provider value={{ store: {state, dispatch} }}>{props.children}</Context.Provider>
}

export default Context
const {Consumer} = Context
export {Store, Consumer}