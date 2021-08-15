import { useSelector, useDispatch } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

const Form = () => {
    const place = useSelector((state) => state.place);
    const dispatch = useDispatch();
    return(
    <>
        <input type = "text" placeholder="Search Location" value={place} onChange = {(e) => {
            dispatch(updatePlace(e.target.value))
        }} />
        <button className = "btn btn-primary" onClick = {() => {
            dispatch(updatePlaceData(place));
        }}>Search</button>
    </>
    )
}

export default Form