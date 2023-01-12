import './App.css';
import React, {Suspense, useState,lazy} from 'react';
// import Todolists from './Todolists';
const Todolists = lazy(()=>{import('./Todolists')});
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
    <Suspense fallback={<h1>hello .... </h1>}>
    <center><div className ="main_div">
      <div className="center_div"><br/>
       <h1>ToDo list</h1><br/>

       <div className="form-group">
       <input type = "text" placeholder = "Add an Item"
       className="form-control form"
       value = {inputList}
       onChange = {itemEvent}/>
      <button onClick = {listOfItems}>+</button><ol>
        {items.map( (itemval,index) => {
         return (
         
         <Todolists key = {index}
         id = {index}
         text = {itemval}
         onSelect = {deleteItems}
         />
        )})}
      </ol> </div></div></div></center>
      </Suspense>
      );}
export default App;
