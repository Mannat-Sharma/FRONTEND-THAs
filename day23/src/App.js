import { useState } from 'react';
import './App.css';
import useCounter from './useCounter';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useCounter(count1)
  useCounter(count2)

  return (
    <div>
    <div className="App">
      <h1>Custom Hooks</h1>
      <div className="container">
      <img src="https://www.freevector.com/uploads/vector/preview/23233/like_dislike.jpg" alt=""></img>
      <div className="like">
      <button onClick={() => {
        const updatedCount1 = count1 + 1;
        setCount1(updatedCount1)
        }}>👍</button>
      <span>{count1}</span>
      <button onClick={() => {
        const updatedCount2 = count2 + 1;
        setCount2(updatedCount2)
        }}>👎</button>
      <span>{count2}</span>
      </div>
      </div>
    </div></div>
  );
}

export default App;
