import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO } from "../../Constants/todoConstants";

const initialState={
    todos:[]
}
const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO :
            return{
                todos:[...state.todos,action.payload]
            }
        case DELETE_TODO :
            return{
                todos: state.todos.filter((todo)=>todo.id!==action.payload.id) 
            }
        case MARK_TODO :
            const allTodolist=state.todos.map((todo)=> (todo.id===action.payload.id) ? {...todo, isCompleted:!todo.isCompleted}: todo)
            return{
                ...state,
                todos:allTodolist
            }

        case EDIT_TODO :
            const newTodoList=state.todos.map((todo)=> (todo.id===action.payload.id) ? {...todo,data:action.payload.data}: todo)
            return{
                ...state,
                todos:newTodoList
            }
        default:
            return state;

    }
}

export default todoReducer;