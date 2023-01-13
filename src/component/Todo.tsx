import React, { useState  , ChangeEvent, useEffect} from 'react'
function Todo(){
    // const EditTask = (val : string) : void =>{
    //     let data = prompt("Type Here Task To Edit");
    //     const arr2: string[] = [];
    //     todolist.map((data : string)=>{
    //         let index = todolist.indexOf(val);
    //         for(let i = 0 ; i < todolist.length;i++){
    //             if(i === index){
    //                 arr2[index] = data;
    //             }else{
    //                 arr2[i] = todolist[i]
    //             }
    //         }
    //         todolist[index] = data;
    //         console.log(todolist);
    //         setTodolist([...todolist]);
    //         console.log(todolist);
    //     })
    // }
    // useEffect(()=>{
    // },[EditTask]);


const [name,setname] = useState<string>("");
const [todolist,setTodolist] = useState<string[]>([]);

const inputchange =(event : ChangeEvent<HTMLInputElement>)=>{
setname(event.target.value);
};

const addTodo = () =>{
    if(name !== ""){
setTodolist([...todolist,name]);
console.log(todolist);
setname("");}else{
    alert("Invalid input : Write Todo");
}
}
const deleteitem = (val : string) : void=>{
    setTodolist(todolist.filter((task) =>{
        return task !== val;
    }))
};


    return (<>
    <input type = "text" placeholder='Enter the Todo' onChange={inputchange} style = {{height:"3rem",background:"orange",width:"60%",borderRadius:"1rem",textAlign:"center",color:"white"}}/>
    <div style={{padding:"0.5rem"}}></div>
    <button onClick ={addTodo} style={{fontWeight:"bolder",fontSize:"1rem",height :"3rem",width:"3rem",borderRadius:"1rem"}}>+</button> 
    <br/>
    <div style={{padding:"0.5rem"}}></div>
    {/* { Why deleteitem is not working when directly assign to on Click} */}
    {todolist.map((val:string) =>{
        return <>
        <li>{val}  <button onClick ={()=>{
           deleteitem(val)
        }}> Todo Completed</button>
        {/* <button onClick={()=>{EditTask(val)}}>Edit</button> */}
        </li>
        </>
    })}
    </>);
}
export default Todo;