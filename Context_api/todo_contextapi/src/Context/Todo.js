import { createContext, useState } from "react";

const TodoContext=createContext();

const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([]);

    const addTodo=(text)=>{
        const newTodo={id:new Date().getTime().toString(),text}
        setTodos((prevTodo)=>[...prevTodo,newTodo])

    }
    const deleteTodo=(id)=>{
        const newTodos=todos.filter((todo)=>todo.id!==id)
        setTodos(newTodos);

    }

    return(
        <TodoContext.Provider value={{todos,addTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider
export {TodoContext}