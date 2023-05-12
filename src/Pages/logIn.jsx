import Container from "../components/Container";
import logo from "../images/logo1.png";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar1 from "../components/NavBar1";

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
      const response = await fetch("http://mmjbank.herokuapp.com/login", {
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
      <NavBar1 />
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

              <div class="button" onClick={(e) => userLogin(e)} id="button-7">
                <div id="dub-arrow">
                  <img
                    src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                    alt=""
                  />
                </div>
                <a href="#">Login</a>
              </div>

              <div class="button" onClick={routeChange} id="button-7">
                <div id="dub-arrow">
                  <img
                    src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                    alt=""
                  />
                </div>
                <a href="#">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
};

export default Login;
