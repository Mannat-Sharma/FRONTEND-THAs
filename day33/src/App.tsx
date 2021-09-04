import React, { useState } from 'react';
import './App.css';
import {Todos, Todotype} from './components/Todos';


function App() {
  const [todos, setTodos] = useState<Todotype[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="todos-container">
        <div className="todo-input">
          <input 
            type="text" 
            value = {input}  
            placeholder="Add a TODO" 
            onChange = {(e) => {
              setInput(e.target.value)
          }}/>
          <button onClick = { () =>{
            setTodos([...todos, { text :input, done: false}])
            setInput("");
          }}>ADD</button>
        </div>
        <div className="todoItems">
          {todos.map((todo, index) => (
            <Todos text={todo.text} done={todo.done} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
