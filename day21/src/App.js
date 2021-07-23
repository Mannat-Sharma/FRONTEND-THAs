import './App.css';
import {useState} from 'react'

function CalorieCard({item, calories, id,list, setList, isEditing, setIsEditing, handleInput}){
  const [foodItem, setFoodItem] = useState(item)
  const [foodCalories, setFoodCalories] = useState(calories)


  const handleDelete = () => {
    const newList = list.filter((el, index) =>{
      return(index !== id)
    })
    setList(newList)
  }

  const handleEdit = (e) => {
    console.log(e.target)
    setIsEditing(true)
  }

  const handleSave = (e) =>{
    console.log(e)
    const newItem = list.map((el, index) => {
      if (index===id){
        return [foodItem, foodCalories]
      }
      else{
        return el
      }
    })
    setList(newItem)
    setIsEditing(false)
  }


  return(
    <div className="calorie-card">
      <div className="card-head">
      {isEditing? <input id = "item" type="text" placeholder="Item Here" name="item" value={foodItem} onChange={(e) =>setFoodItem(e.target.value)}/>:<h3>{foodItem}</h3>}
      {isEditing? <input id="calorie" type="number" placeholder="Calories Here" name="calories" value={foodCalories} onChange={(e) =>setFoodCalories(e.target.value)}/>:<p>You have consumed {foodCalories} calories today</p>}</div>
      <div className="card-btns">
      {isEditing? <button type="submit" className="save-btn" onClick={handleSave}>Save</button> : <button className="edit-btn" onClick={handleEdit}>Edit</button>}
      <button className="del-btn" onClick={handleDelete}>Delete</button></div>
    </div>
  )
}

function App() {
  const [calorieCardDisplay, setCalorieCardDisplay] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [calorieData, setCalorieData] = useState({
    item: "",
    calories: ""
  })

  const handleInput = (e) => {
    console.log(e)
    const name = e.target.name
    let value = e.target.value
    setCalorieData({...calorieData, [name]:value})
  }

  const handleAdd = (e) =>{
    e.preventDefault();
    if (calorieData.item==="" || calorieData.calories===""){
      console.log("empty")
      return
    }
    setCalorieCardDisplay([...calorieCardDisplay, calorieData])
    setCalorieData({
      item:"",
      calories: ""
    })
  }


  return (
       
    <div className="App">
      <div className="conatiner">
      <h1 className="head">CALORIE TRACKER</h1>
      <form>
        <input id = "food" type="text" placeholder="Item Here" name="item" value={calorieData.item} onChange={handleInput}/>
        <input id="calories" type="number" placeholder="Calories Here" name="calories" value={calorieData.calories} onChange={handleInput}/>
        <button type="submit" className="add-btn" onClick={handleAdd}>Add Item</button>
      </form></div>
      {calorieCardDisplay.length >0? calorieCardDisplay.map((item, index) => <CalorieCard list={calorieCardDisplay} setList ={setCalorieCardDisplay} isEditing={isEditing} setIsEditing={setIsEditing} handleInput = {handleInput} item ={item.item} calories={item.calories} id={index} key={index}/>) : <p className = "empty">Start Adding Items</p>}
    </div>
  );
}

export default App;
