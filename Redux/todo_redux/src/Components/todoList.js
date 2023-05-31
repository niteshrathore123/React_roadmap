import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, markTodo } from "../Redux/Actions/todoAction";
import "../style.css"


const TodoList=()=>{
    const [todoText,setTodoText]=useState("");
    const [editTodoId,setEditTodoId]=useState(null);
    const dispatch=useDispatch();
    const {todos}=useSelector(state=>state.todoReducer);
    console.log(todos);

    
    const handleAddTodo=()=>{
        dispatch(addTodo(todoText));
        setTodoText("")
    }
    const handleRemoveTodo=(id)=>{
        dispatch(deleteTodo(id));
        
    }
    const handleMarkTodo=(id)=>{
        console.log("MARK")
        dispatch(markTodo(id))
    }

    const handleStartEdit=(id,text)=>{
        console.log(id)
        setEditTodoId(id);
        setTodoText(text);

    }

    const handleSaveEdit=(id,text)=>{
        dispatch(editTodo(id,text))
        setEditTodoId(null);
    }

    const handleCancelEdit=()=>{
        setTodoText("")
        setEditTodoId(null);
    }

    return(
        <div>
            <div>
                <input placeholder="Todo Input" 
                    onChange={(e)=>setTodoText(e.target.value)} 
                    
                    disabled={editTodoId!==null}
                />
                <button onClick={handleAddTodo} disabled={editTodoId!==null}>Add</button>
            </div>
            <div>
                
                <ul>
                    {
                        todos ? 
                        todos.map((todo)=>(
                           <li key={todo.id}>
                                {
                                    editTodoId===todo.id ?
                                    (
                                        <>
                                            <input value={todoText} onChange={(e)=> setTodoText(e.target.value)}/>
                                            <button style={{backgroundColor:"blue",color:"#ffffff",marginLeft:20,marginRight:20}} onClick={()=>handleSaveEdit(todo.id,todoText)}>Save</button>
                                            <button style={{backgroundColor:"blue",color:"#ffffff",marginLeft:20,marginRight:20}} onClick={handleCancelEdit}>Cancel</button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <span onClick={()=>handleMarkTodo(todo.id)} style={todo.isCompleted ?{textDecoration:"line-through"}:{}}>{todo.data}</span> 
                                            <button style={{color:"#fffff",backgroundColor:"blue",marginLeft:30,marginRight:30}} onClick={()=>handleStartEdit(todo.id,todo.data)}>Edit</button>
                                            <button style={{color:"red",backgroundColor:"#ffffff",marginLeft:30}} onClick={()=>handleRemoveTodo(todo.id)}>X</button>

                                        </>
                                    )
                                
                               
                                }
                            </li> 
                        ))
                        :<p>Loading ...</p>
                    }
                    
                </ul>
            </div>
        </div>
    )
}
export default TodoList;

