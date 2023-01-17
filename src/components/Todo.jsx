import React, { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { addTodo, removeTodo,checkTodo,doneTodo } from '../Action/index';
const Todo = () =>{
    const [data,setdata] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.toddReducer.list);
      const date = new Date();
      let text = date.toString();

return (
<>


<div className="form-row align-items-center" style = {{padding:'5rem'}}>
    <div className="col-auto" >
      <label className="sr-only" for="inlineFormInput">Add Todo</label>
      <input type="text" className="form-control mb-2" id="formGroupExampleInput" placeholder='Write the input' onChange={(event)=>{setdata(event.target.value)}} value={data} />
    </div>
    <div className="col-auto">
<button className="btn btn-primary mb-2" onClick={()=>
    {
       
         
    if(data === ''){
        alert("Enter the Todo");
    }else{
        
        dispatch(addTodo(data),setdata(''))
    }
    date = new Date();
    text = date.toString();
    
   }}> Add This Todo </button>
</div>
  </div>
<div>  
    <ul class="list-group" style={{paddingLeft : '5rem',paddingRight : '5rem' }}>
    {list.map((val)=>{
        return (
            <>
           <li className="list-group-item d-flex justify-content-between align-items-center">
           <p key = {val.id} style = { val.completed ? {color:'green'}:{ color:'blue'}}  >
                {val.data}  
                </p>
                
                 <button className = "btn btn-success"   onClick = {()=>{
                    dispatch(doneTodo(val.id),setdata(''))
                 }} disabled = {val.completed}>Done</button>


                <span class="badge badge-primary badge-pill">
                 <button onClick={()=>{

                         alert("Have You Completed the task ?")                    
                    dispatch(removeTodo(val.id))}} className="btn btn-danger mb-2" style ={{textAlign:'right'}}>Delete Task</button> 
                 </span>
                
         </li>
            
            
            </>
        )
    })}
    </ul>
</div>
<center style={{margin:'1rem' , marginBottom:'0rem'}}>
<button className="btn btn-danger mb-2"  onClick = {()=>
    
    {
        alert("Do You really want to remove all the Task")
    dispatch(checkTodo())}}>check</button>
    <p>Last time update : {text}</p>
</center>
</>

)
} 
export default Todo;