import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Profile from './Profile';

const Context = React.createContext();
export default Context;

export function Authenticate(children){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = {
        isLoggedIn: isLoggedIn,
        handleLogin : () => {
            setIsLoggedIn(!isLoggedIn);
        }
    }
    return(
        <Context.Provider value={login}>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/profile" component={Profile}></Route>
        </Context.Provider>
    );
}