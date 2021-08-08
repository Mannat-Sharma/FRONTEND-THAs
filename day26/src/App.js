import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {updateUsername, updateEmail}  from "./actions/index";

function App() {
  const state = useSelector((state) => state.updateDisplay)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="inputs">
        <h1 style={{margin:"1rem"}}>Input</h1>
      <input type="text" placeholder="Username" name = "username" onChange={(e) => dispatch(updateUsername(e.target.value))} />
      <input type="email" placeholder="Email" name="email" onChange={(e) => dispatch(updateEmail(e.target.value))} />
      </div>
      <h1 style={{margin:"1rem"}}>Data</h1>
      <h4>Username: <span style={{fontWeight: "lighter"}}>{state.username}</span></h4>
      <h4>Email: <span style={{fontWeight: "lighter"}}>{state.email}</span></h4>
    </div>
  );
}

export default App;
