import { useState } from 'react';
import './App.css';
import CalorieCard from './components/Caloriecard'
import foodData from './components/foodData';


function App() {
  let [list, setList] = useState(foodData);
  return (
    <div>
      <h1>CALORIES READ ONLY</h1>
    <div className="App">
      {list.length > 0 ? list.map(item => <CalorieCard key={item.id} item={item} list={list} setList ={setList}/>) : <p className="empty">Empty List</p>}
    </div></div>
  );
}

export default App;
