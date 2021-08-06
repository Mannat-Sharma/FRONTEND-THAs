import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from './Context';

function Profile(){
    const value = useContext(Context);
    return(
        <div>
            {value.isLoggedIn? <h1>Profile</h1> : <Redirect to = "/"/>}
        </div>
    )
}
export default Profile;