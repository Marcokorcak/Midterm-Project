import Container from "../components/Container";
import logo from "../images/logo1.png";
import React from "react";

const Login = () => {
  return (
    <Container>
      <div class="login">
        
          <div className="container_card_log_a">
            <div className="card-body">
             
                <img className="a" src={logo}></img>

                <input className="a" name="userName" placeholder="User Name" />

                <input className="b" name="password" placeholder="Password" />
             
            </div>
          </div>
        

        <div class="fill-button">
          <button class="btn">
            <p className="text-light font-weight-bold">Log In</p>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
