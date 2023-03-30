import Container from "../components/Container";
import logo from "../images/logo1.png";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passwd, setPassword] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/signup`;
    navigate(path);
  };

  const usernameHandler = (e) => {
    //function to set user's input
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    //function to set user's input
    setPassword(e.target.value);
  };

  const userLogin = async (e) => {
    try {
      e.preventDefault();

      const body = { username, passwd };
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status == 200) {
        window.location = "/viewAccount";
      } else if (response.status == 404) {
        alert("User Not Found.");
      } else if (response.status == 401) {
        alert("Incorrect Password.");
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <div class="login">
        <div className="container_card_log_a">
          <div className="card-body">
            <img className="a" src={logo}></img>

            <input
              className="a"
              name="userName"
              placeholder="User Name"
              onChange={usernameHandler}
              value={username}
            />

            <input
              className="b"
              name="password"
              placeholder="Password"
              type="password"
              onChange={passwordHandler}
              value={passwd}
            />

            <div class="fill-button">
              <button class="btn" onClick={userLogin}>
                <p className="text-light font-weight-bold">Log In</p>
              </button>
              <button class="btn" onClick={routeChange}>
                <p className="text-light font-weight-bold">Sign Up</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
