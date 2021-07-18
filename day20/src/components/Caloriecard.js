function CalorieCard(props){

    const handleDelete = () => {
        console.log(props.list)
        let newList = props.list.filter(el => el.id !== props.item.id)
        props.setList(newList)
    }
    return(
        <div className="container">
            <div className="calorie-card">
            <h3>{props.item.food}</h3><button onClick={handleDelete}>Delete</button>
            <p>you have consumed {props.item.calorie} today</p>
        </div></div>
    )
}

export default CalorieCard