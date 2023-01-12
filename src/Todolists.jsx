import React from 'react';

const Todolists = (props) =>{
   
   return (
   <>
<ul className="list-group">
<li className="list-group-item d-flex justify-content-between align-items-center">
{props.text}
    <span className="badge badge-primary badge-pill" onClick={()=>{
    props.onSelect(props.id);
   }}>X</span>
  </li>
   </ul>
   </>);
}
export default Todolists; 