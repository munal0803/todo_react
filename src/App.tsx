import React ,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todo from './component/Todo';
let value = "Munal";
function App() {
  return (
    <div className="App">
      <Header name={value}/>
      <Todo/>
    </div>
  );
}

export default App;
