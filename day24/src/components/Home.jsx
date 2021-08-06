import React, { useContext} from 'react';
import Context from './Context';

function Home(){
    const isLogin = useContext(Context);
    function handleLogin(){
        console.log(isLogin);
        isLogin.handleLogin();
    }
    return(
        <div  className="home">
            <h1>Home</h1>
            <h4>If not logged in, can't access Profile and Dashboard</h4>
            <button onClick={handleLogin}>{isLogin.isLoggedIn? "Logout" : "Login"}</button>
        </div>
    )
}
export default Home;