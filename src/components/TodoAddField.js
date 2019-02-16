import React, {useState} from 'react'
import styled from 'styled-components'

const AddField = styled.input`
  width: 800px; padding: 20px 30px; margin: 20px auto; display: block;
  border-bottom: 2px dashed #dfdfdf; font-size: 20px; text-align: center;
`

export default ({confirmNewTask}) => {
  const [description, setDescription] = useState('')

  const handleEnter = (e) => {
    e.preventDefault()
    if(e.keyCode !== 13)
      return

    confirmNewTask(description)
    setDescription('')
  }

  return (
  <div style={{display: 'flex'}}>
    <AddField
    value={description} 
    onChange={(e) => {setDescription(e.target.value)}}
    onKeyUp={handleEnter}
    placeholder="What's Next?">
    </AddField>
  </div>

  )
}