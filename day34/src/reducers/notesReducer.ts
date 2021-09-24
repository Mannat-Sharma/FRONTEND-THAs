interface AddNoteAction{
    type: string,
    payload : string
}
interface DelNoteAction{
    type: string,
    payload : number
}
type ActionType = AddNoteAction | DelNoteAction;

const notesReducer = (state: any = [], action: ActionType) => {
    switch (action.type){
        case 'ADD_NOTE' : 
            return [...state, action.payload];
        case 'DEL_NOTE' : 
            return state.filter((_: string, index:number) => index !== action.payload);
        default:
            return state;
    }
}
export default notesReducer;