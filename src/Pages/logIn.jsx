import Container from "../components/Container";
import logo from "../images/logo1.png";
import React from 'react';


const Login = () => {
    return (<Container>


        <div className="login">

        <img className = 'a' src = {logo}></img>

      <input className="a" name="userName" placeholder="User Name" />
      
       <input className="b" name="password" placeholder="Password" />
     
      <button type="submit">Log In</button>

      </div>

    </Container>)
}

export default Login;