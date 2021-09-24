import React, { useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {reducerType} from "./reducers"
import { addNote, deleteNote } from './actions';

function App() {
    const notes = useSelector((state: reducerType) => state.notes);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
  return (
    <div className="App">
        <div className="header">
            <h1>NOTES</h1>
            <div className="input">
            <input 
            type="text" 
            value={input} 
            placeholder = "Add a note"
            onChange={(e) => {
                setInput(e.target.value)
            }} />
            <button onClick = {(e) => {
                if (input){
                    dispatch(addNote(input))
                    setInput("");
                }
            }}>+</button>
            </div>
        </div>
        <div className="notes">
            {notes.map((note: string, index:number) => (
                <div className="note" key = {index}>
                    <div className="note-head">
                        <button className="del-btn"
                                onClick = {() => {
                                    dispatch(deleteNote(index))
                                }}
                        ><i className="fas fa-trash-alt"></i></button>
                    </div>
                    <p style={{backgroundColor:"transparent"}}>{note}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default App;
