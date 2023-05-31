import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/Todo';

const TodoList = () => {
    const [todoText,setTodoText]=useState("");
    const {todos,addTodo,deleteTodo}=useContext(TodoContext);

    const handleAddTodo=()=>{
        addTodo(todoText);
    }
    


  return (
    <div>
        <div>
            <input placeholder='Add Todo' onChange={(e)=>setTodoText(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <div>
            <ul>
                {todos ?
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.text} 
                            <button style={{backgroundColor:"Red",color:"white",marginLeft:20}} onClick={()=>deleteTodo(todo.id)}>X</button>
                        </li>
                    ))
                    :
                    <p>Loading...</p>
                }
            </ul>
        </div>
    </div>
  )
}

export default TodoList