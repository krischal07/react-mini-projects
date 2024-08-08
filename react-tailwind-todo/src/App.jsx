import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  const [todo,setTodo] = useState("");//input text
  const [todos, setTodos] = useState([]); //Holds all the arrays of todos

useEffect(() =>{
  let todoString = localStorage.getItem("todos");
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }
},[])

  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleChange = (e) =>{
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name
    // todos.filter()
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      // console.log(todos);
      
      setTodos(newTodos);
    saveToLs();

   }

  const handleEdit = (e,id) =>{
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item =>{
      return item.id!==id
    });
    setTodos(newTodos);
    saveToLs();
  }

  const handleDelete = (e, id) =>{
 
      let newTodos = todos.filter(item =>{
        return item.id!==id
      });
      setTodos(newTodos);
    saveToLs();
     
  }

  const handleAdd = () =>{
    setTodos([...todos, {id:uuidv4(),todo, isCompleted:false}]);
    setTodo("");
    saveToLs();

  }

  return (
<>
  <Navbar />
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[80vh]">
    
          <div className="addTodo">
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input onChange={handleChange} value={todo} type="text" className='w-1/2 my-5'/>
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-6'>Add</button>
          </div>
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            {todos.length===0 && <div className='font-bold'>No Todos to display</div>}
            {todos.map(item => {
              
              return <div className="todo flex w-1/2 justify-between my-3" key={item.id}>
                <input onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} name={item.id}/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={(e) => handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-1'>Edit</button>
                <button onClick={(e) =>handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-lg mx-1'>Delete</button>
              </div>
            </div>
        })}
          </div>
    </div>
 </>
  )
}
