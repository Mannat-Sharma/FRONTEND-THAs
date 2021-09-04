import { useState } from "react";
import { isCallChain } from "typescript";

 export interface Todotype{
    text: string,
    done: boolean,
}
  

export const Todos = ({ text, done} : Todotype) => {
    let [isChecked, setIsChecked] = useState(false);
    
    return(
        <div className= "todo" style={{textDecoration: isChecked? 'line-through' : undefined, opacity : isChecked ? "0.5" : "1"}}>
            <div className="input">
                <input 
                    title = {isChecked? "Uncheck" : "Check"}
                    type="checkbox"
                    onChange = {() => {setIsChecked(!isChecked)}}
                    onClick = {() => 
                        {setIsChecked(!isChecked);
                        console.log(isChecked);}
                        
                    }
                    checked = {isChecked}
                />
                <label htmlFor="check"> {text}</label>
            </div>
            <i className="far fa-trash-alt" title="Delete" onClick = {(e) => {
                const target = e.target as HTMLButtonElement;
                console.log("del");
                target.parentElement?.remove();
            }}></i>
        </div>
    )
}