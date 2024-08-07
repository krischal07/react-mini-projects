import React, { useState } from 'react'
import { Navbar } from './components/Navbar'

export default function App() {
  const [todo,setTodo] = useState("");//input text
  const [todos, setTodos] = useState([]); //Holds all the arrays of todos

  const handleChange = (e) =>{
    setTodo(e.target.value);
  }

  const handleEdit = () =>{

  }

  const handleDelete = () =>{
    
  }

  const handleAdd = () =>{
    setTodos([...todos, {todo, isCompleted:false}]);
    setTodo("");
  }

  return (
<>
  <Navbar />
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh]">
    
          <div className="addTodo">
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input  onChange={handleChange} value={todo} type="text" className='w-1/2 my-5'/>
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-6'>Add</button>
          </div>
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.map(item => {
              
              return <div className="todo flex w-full">
              <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-1'>Edit</button>
                <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-1'>Delete</button>
              </div>
            </div>
        })}
          </div>
    </div>
 </>
  )
}
