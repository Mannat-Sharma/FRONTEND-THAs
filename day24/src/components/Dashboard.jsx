import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import Context from './Context';

function Dashboard(){
    const value = useContext(Context);
    console.log(value);
    return(
        <div>
            {value.isLoggedIn? <h1>Dashboard</h1> : <Redirect to = "/"/>}
        </div>
    )
}
export default Dashboard;