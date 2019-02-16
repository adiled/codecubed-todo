import React, {useState} from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex; flex-flow: row; align-items: center; justify-content: space-around; padding: 10px 0; margin: 5px 0
  color: #d3d3d3; background: #fff; border-radius: 5px; 
  
  > * { padding: 0 20px; margin: 0}

  opacity: ${props => props.data.status === 'complete' ? 0.9 : 1}
`

const Description = styled.input`
  color: #777; font-size: 20px; border: 0;
  opacity: ${props => props.data.status === 'complete' ? 0.5 : 1}
  user-select: none;
`

const CheckButton = styled.button`
  width: 40px; height: 40px; padding: 0;
  border-radius: 50%; background: transparent; box-shadow: 0 0 0 2px #dfdfdf; color: #fff; border: 0; font-weight: bold; font-size: 22px; text-align: center; color: lime;
`

export default ({data, toggleStatus, updateDescription}) => {

  const [edit, setEdit] = useState(false)
  const [description, setDescription] = useState(data.description)

  const changeDescription = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
  }

  const saveDescription = (e) => {
    e.preventDefault()
    if(e.keyCode !== 13)
      return

    updateDescription()
    setEdit(false)
  }

  return (
  <Container data={data}>

    <Description
    data={data}
    value={description}
    onChange={changeDescription}
    onDoubleClick={ (e) => {e.preventDefault(); setEdit(true)} }
    onKeyUp={saveDescription}
    readOnly={!edit}/>
    
    <CheckButton 
    checked={data.status === 'complete'}
    onClick={(e) => {e.preventDefault(); toggleStatus()} }>
    {data.status === 'complete' && <span>&#x2713;</span>}</CheckButton>
  
  </Container>
)}