import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO } from "../../Constants/todoConstants"

export const addTodo=(data)=>{
    return{
        type:ADD_TODO,
        payload:{
            id:new Date().getTime().toString(),
            data:data,
            isCompleted:false,
        }
    }
}

// delete action
export const deleteTodo=(id)=>{
    return{
        type:DELETE_TODO,
        payload:{
            id
        }
    }
}
export const markTodo=(id)=>{
    return{
        type:MARK_TODO,
        payload:{
            id
        }
    }
}

export const editTodo=(id,data)=>{
    return{
        type:EDIT_TODO,
        payload:{
            id,
            data
        }
    }
}