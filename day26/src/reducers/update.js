const initialState = {
    username: "",
    email: "",
};
const updateDisplay = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_USERNAME" :
            return {
                ...state,
                username: action.name,
            };
        case "UPDATE_EMAIL" :     
            return{
                ...state,
                email: action.name
            }
        default: return state;
    }
}

export default updateDisplay;