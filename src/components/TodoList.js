import React from 'react'
import '../App.css'
const TodoList = ({todo, onDelete,onToggle ,completed}) => {
  return (
    <>
    <div className="todoList">
      {todo.map((todo,index)=> <div className='todoMap' key={index}>
        <h5 style={{textDecoration:completed[index]? 'line-through' :'none',cursor:'pointer'}} onClick={()=>onToggle(index)}>{todo}</h5><button onClick={()=>onDelete(index)}>Delete</button> 
      </div> )} 
    </div>
    </>
  )
}

export default TodoList
