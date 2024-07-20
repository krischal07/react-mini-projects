import React, { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');

    function handleChange(e){   
        setInputValue(e.target.value);
    }

    function handleSubmit(){
        // e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    function handleDelete(index){
        const newTodos = [...todos];
        console.log("index"+index);
        console.log(index);
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
  return (
    <div>
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>Add Todo</button>
        </div>
        <ul>
            {todos.map((todo) => (
                <li key={todo}>
                    {todo}
                    <button onClick={handleDelete}>Delete</button>
                </li>
            ))}
            
        </ul>
    </div>
  )
}
