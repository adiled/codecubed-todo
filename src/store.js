import React, {useReducer} from 'react'
const Context = React.createContext()

const reducer = (state, action) => {
  let update
  switch (action.type) {

    case 'login':
    console.log('Credentials', action.payload)
    update = JSON.parse(JSON.stringify(state))
    Object.assign(update, {authenticated: true})
    return update

    case 'addTodoItem':
    let item = JSON.parse(JSON.stringify(state.todoItemDefault))
    Object.assign(item, action.payload)
    item.id = state.todoList[0].id + 1
    Object.assign(state, {todoList: [item].concat(state.todoList)})
    return JSON.parse(JSON.stringify(state))

    case 'updateTodoItem':
    update = JSON.parse(JSON.stringify(state))
    let index = update.todoList.findIndex(o => o.id === action.payload.id)
    Object.assign(update.todoList[index], action.payload)
    return update
    
    default:
    throw new Error('Booh')
  }
}

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    authenticated: false,
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
      description: 'Add more todos',
      status: 'pending'
    }
    ]
  });

  return <Context.Provider value={{ store: {state, dispatch} }}>{props.children}</Context.Provider>
}

export default Context
const {Consumer} = Context
export {Store, Consumer}