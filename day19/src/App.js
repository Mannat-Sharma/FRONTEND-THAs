import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {}, [count1, count2, count3, count4]);
  return (
    <div className="App">

      <button onClick={() =>{
        const updatedCount1 = count1+1;
        setCount1(updatedCount1);
      }}>{count1}</button>

      <button onClick={() =>{
        const updatedCount2 = count2+1;
        setCount2(updatedCount2);
      }}>{count2}</button>

      <button onClick={() =>{
        const updatedCount3 = count3+1;
        setCount3(updatedCount3);
      }}>{count3}</button>

      <button onClick={() =>{
        const updatedCount4 = count4+1;
        setCount4(updatedCount4);
      }}>{count4}</button>

    </div>
  );
}

export default App;
