import Container from "../components/Container";
import user from "../user.png";
import React from 'react';




const Settings = () => {
    return (<Container>
        <img className = 'b' src = {user}></img>

        <p className="a"> Enter what you could like to change</p>

        <input className="a" name="userName" placeholder="User Name" />
      
       <input className="b" name="email" placeholder="email" />

       <input className="b" name="phoneNum" placeholder="Phone Number" />

       <button type="submit">Update Info</button>


    </Container>)
}

export default Settings;