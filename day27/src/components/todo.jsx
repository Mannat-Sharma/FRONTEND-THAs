import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";
const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo)
    return(
        <div className="todo-container">
        {todos.map((todo, index) =>(
        <div className="todo">
            <h5 style={{display: "inline-block"}}>{todo.title}</h5>
            <button className = "delete" onClick={() => {
                dispatch(deleteTodo(index))
            }}>❌</button>
        </div>
        ))}
        </div>
    )
}
export default Todo;