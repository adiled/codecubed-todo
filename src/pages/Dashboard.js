import React, {useContext} from 'react'
import Context from '../store'

const Dashboard = () => {
  const context = useContext(Context)

  return (
  <div>
    Name: {context.store.state.name}
  </div>
  )

}

export default Dashboard