import './App.css';
import React, {useState} from 'react';
import Todolists from './Todolists';
function App() {
const [inputList,setInputList]=useState("");
const [items,setItems] = useState([]);
const itemEvent = (event)=>{
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems , inputList];
    })
  };
  const deleteItems = (id) =>{
   setItems((oldItems =>{
    return oldItems.filter((arrElem,index) => {
     return index !== id ;
    })
   }))
  };
  return (
    <><center><div className ="main_div">
      <div className="center_div"><br/>
       <h1>ToDo list</h1><br/>

       <div class="form-group">
       <input type = "text" placeholder = "Add an Item"
       className="form-control forrm"
       value = {inputList}
       onChange = {itemEvent}/>
      <button onClick = {listOfItems}>+</button><ol>
        {items.map( (itemval,index) => {
         return <Todolists key = {index}
         id = {index}
         text = {itemval}
         onSelect = {deleteItems}
         />;
        })}
      </ol> </div></div></div></center></>);}
export default App;
