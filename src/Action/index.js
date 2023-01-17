export const addTodo = (data)=>{
    return {
        type : "ADDTODO",
        payload : {
            id:new Date().toString(),
            data:data
        }
    }
}
export const removeTodo = (id)=>{
    return {
        type : "REMOVETODO",
        id
    }
}

export const doneTodo = (id)=>{
    return {
        type : "DONETODO",
        id
    }
}

export const checkTodo = ()=>{
    return {
        type : "CHECKTODO"
    }
}