import Caloriecard from "./components/Caloriecard";

function App(){
    return (
        <div>
        <h1>CALORIE READ ONLY</h1>
        <div className="App">
            
            <Caloriecard item="Pizza" calorie="56" />
            <Caloriecard item="Burger" calorie="69"/>
            <Caloriecard item="Coke" calorie="500"/>
            <Caloriecard item="Brownie" calorie="180"/>
            <Caloriecard item="Fried Rice" calorie="90"/>
            <Caloriecard item="lasagna" calorie="200"/>
            <Caloriecard item="Pani Puri" calorie="10"/>
        </div>
        </div>
    )
}  

export default App;