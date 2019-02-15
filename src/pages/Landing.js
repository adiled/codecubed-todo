import React, {useContext, useState} from 'react'
import Context from '../store'

import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoItem'

const Landing = () => {
  const context = useContext(Context)

  const [newItemShow, setNewItemShow] = useState(false)

  const newTask = (data) => {
    context.store.dispatch({
      type: 'addTodoItem',
      payload: data
    })
  }

  return (
    <div>
      <TodoList toggleNewTask={setNewItemShow} confirmNewTask={newTask} >

        {newItemShow && <TodoItem data={context.store.state.todoItemDefault} />}
        {context.store.state.todoList.map(item =>         
          <TodoItem 
          key={item.id}
          data={item}
          markAsComplete={() => {
            context.store.dispatch({action: 'markTodoItemComplete', id: item.id})
          }}
          ></TodoItem>
        )}
      </TodoList>
    </div>
    )
  

}

export default Landing