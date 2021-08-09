const todoReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO":
            console.log(action)
            return[
                ...state, 
                action.payload,
            ]
        case "DELETE_TODO":
            return state.filter((item,index) => index !== action.payload)
        default:
            return state
    }
}

export default todoReducer;