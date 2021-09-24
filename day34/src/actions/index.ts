const addNote = (name: string) => {
    return {
        type : "ADD_NOTE",
        payload : name
    }
}

const deleteNote = (id : number) => {
    return {
        type : "DEL_NOTE",
        payload : id
    }
}

export {addNote, deleteNote};