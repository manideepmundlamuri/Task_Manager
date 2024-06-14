import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [task ,setTask] = useState('');
  const [todo ,setTodo] =useState([]);
  const [completed ,setCompleted] = useState(new Array(todo.length).fill(false))
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(task===''){
      alert('please add task')
    }else{
    const newTodo =[...todo,task]
    setTodo(newTodo);
    setTask('')
    }
  }

  const handleDelete= (indexValue)=>{
    const newTodos = todo.filter((todo, index)=>index !==indexValue)
    setTodo(newTodos)
    const newCompleted =completed.filter((_,compIndex)=>compIndex !==indexValue)
    setCompleted(newCompleted);
  }

  const onToggle =(index)=>{
    const newCompleted =[...completed];
    newCompleted[index] =!newCompleted[index]
    setCompleted(newCompleted)
  }
  return (
    <>
    <div className="todo">
      <h2>Todo App Management</h2>
      <hr style={{width:'40%'}} />
      <div className="todo-form">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='todo' placeholder='Add Task' value={task} onChange={(e)=>setTask(e.target.value)} />
          <input type="submit" value='Add' />
        </form>
      </div>
      <TodoList todo={todo} onDelete={handleDelete} onToggle={onToggle} completed={completed}/>
    </div>

    </>
  )
}

export default App;
