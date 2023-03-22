import Container from "../components/Container";
import logo from "../images/logo1.png";
import React from 'react';


const Login = () => {
    return (<Container>
        <div class="col-lg-8 log">

            <div className=" card_back_log">
                <div className="container_card_log">

                    <div className="card-body">
                        <div className='text-center'>

                            <img className='a' src={logo}></img>

                            <input className="a" name="userName" placeholder="User Name" />

                            <input className="b" name="password" placeholder="Password" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    

    </Container>)

}

export default Login;