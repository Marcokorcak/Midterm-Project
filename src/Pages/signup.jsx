import Container from "../components/Container";
import user from "../images/user.png";
import React from "react";
import { useState } from "react";
import NavBar1 from "../components/NavBar1";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const [email, setEmail] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      const body = { username, email, passwd };

      const response = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.status == 200) {
        alert("Account Created");

        window.location = "/";
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const usernameHandler = (e) => {
    //function to set user's input
    setUsername(e.target.value);
  };

  const passwdHandler = (e) => {
    //function to set user's input
    setPasswd(e.target.value);
  };

  const emailHandler = (e) => {
    //function to set user's input
    setEmail(e.target.value);
  };

  return (
    <Container>
      <NavBar1 />

      <div>
        <h1 className="text-light text-center m-t 40 a">Signup</h1>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="container_card_set">
              <div className="card-body">
                <div className="text-center ">
                  <img className="b" src={user}></img>

                  <p className="a"> Enter New User Information</p>

                  <input
                    className="set"
                    name="userName"
                    placeholder="User Name"
                    value={username}
                    onChange={usernameHandler}
                  />

                  <input
                    className="set"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={emailHandler}
                  />

                  <input
                    className="set"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={passwd}
                    onChange={passwdHandler}
                  />

                  <button
                    className="x"
                    type="submit"
                    onClick={(e) => createAccount(e)}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
