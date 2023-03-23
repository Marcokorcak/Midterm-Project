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

        <div class="container">
            <h1 className="text-light text-center m-t 40 a" >Enter what you would like to change</h1>
            <div class="row">
                <div class="col-lg-6 mb-4">

                    <div class="card_back">
                        <div class="container_card_set">

                            <div class="card-body">
                                <div className='text-center'>

                                    <img className='b' src={user}></img>

                                    <p className="a"> Enter what you could like to change</p>

                                    <input className="set" name="userName" placeholder="User Name" value={userSearch} onChange={userSearchHandler} />

                                    <input className="set" name="email" placeholder="email" value={passwordSearch} onChange={passwordSearchHandler} />

                                    <input className="set" name="phoneNum" placeholder="Phone Number" value={emailSearch} onChange={emailSearchHandler} />

                                    <button className="x" type="submit">Update Info</button>




                                </div>



                            </div>




                        </div>
                    </div>
                </div>
            </div>

        </div>




    </Container>)
}

export default Settings;