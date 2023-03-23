import Container from "../components/Container";
import user from "../images/user.png";
import React from 'react';
import { useState } from "react";




const Settings = () => {

    const [userSearch, setUserSearch] = useState("");
    const [passwordSearch, setPasswordSearch] = useState("");
    const [emailSearch, setEmailSearch] = useState("");



    const userSearchHandler = (e) => {
        //function to set user's input
        setUserSearch((e.target.value));
       
    };

    const passwordSearchHandler = (e) => {
        //function to set user's input
        setPasswordSearch((e.target.value));
       
    };

    const emailSearchHandler = (e) => {
        //function to set user's input
        setEmailSearch((e.target.value));
      
    };

    return (<Container>
        <div className="every">
            
        <img className = 'b' src = {user}></img>

        <p className="a"> Enter what you could like to change</p>

        <input className="a" name="userName" placeholder="User Name" value = {userSearch} onChange = {userSearchHandler}/>
      
       <input className="b" name="email" placeholder="email" value = {passwordSearch} onChange = {passwordSearchHandler} />

       <input className="b" name="phoneNum" placeholder="Phone Number" value = {emailSearch} onChange = { emailSearchHandler}/>

       <button className="x" type="submit">Update Info</button>

       </div>
    </Container>)
}

export default Settings;