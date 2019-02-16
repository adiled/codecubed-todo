import React, {useContext, lazy, Suspense} from 'react'
import Context from '../store'

// import TodoList from '../components/TodoList'
import TodoItem from '../components/TodoItem'
import TodoAddField from '../components/TodoAddField'
import ProfileAvatar from '../components/ProfileAvatar'
const TodoList = lazy(() => import('../components/TodoList'))


const Dashboard = () => {
  const context = useContext(Context)

  const newTask = (description) => {
    context.store.dispatch({
      type: 'addTodoItem',
      payload: {description}
    })
  }

  return (
    <div>

      <ProfileAvatar></ProfileAvatar>

      <TodoAddField confirmNewTask={newTask} />

      <Suspense fallback={<p>Loading</p>}>
        <TodoList >

          {context.store.state.todoList.map(item =>         
            <TodoItem 
            key={item.id}
            data={item}
            toggleStatus={() => {
              context.store.dispatch({
                type: 'updateTodoItem',
                payload: {id: item.id, status: (item.status === 'pending') ? 'complete' : 'pending'}
              })
            }}
            updateDescription={(value) => {
              context.store.dispatch({
                type: 'updateTodoItem', 
                payload: {id: item.id, description: value}
              })
            }}
            ></TodoItem>
          )}
        </TodoList>
      </Suspense>
      <p style={{fontSize: '12px', textAlign: 'center', color: '#999'}}>DOUBLE TAP TASK TO EDIT</p>
    </div>
    )
  

}

export default Dashboard