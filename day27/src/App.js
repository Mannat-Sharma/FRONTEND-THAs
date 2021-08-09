import { useState } from 'react';
import './App.css';
import Todo from './components/todo';
import {useDispatch} from 'react-redux';
import {addTodo} from "./actions/index"

function App() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>TODOs</h1>
      <input type = "text" placeholder="What do you want to do?" value={item} onChange={(e) => {setItem(e.target.value)}}/>
      <button onClick={()=> {
        dispatch(addTodo({
          title: item,
          done: false,
        }));
        setItem("");
      }}>+</button>
      <Todo/>
    </div>
  );
}

export default App;
