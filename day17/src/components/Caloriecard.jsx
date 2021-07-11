function caloriecard(props){
    let {item, calorie} = props;
    return(
        <div className="container">
        <div className="calorie-card">
            <h1>{item}</h1>
            <h2>you have consumed {calorie} cals today</h2>
        </div>
        </div>
    )
}
export default caloriecard;