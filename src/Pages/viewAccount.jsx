import Container from "../components/Container";
import React from 'react';
import {NavLink as RouterLink} from 'react-router-dom';



const ViewAcc = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:scale-150 transition duration-300 `
    }


    return (<Container>

<p className="a"> Hello, John Doe</p>

<div className="a">
<RouterLink className={getClassName} to="/checkingAcc">Checking Account</RouterLink>
</div>

<div className="b">
<RouterLink className={getClassName} to="/savingsAcc">Savings Account</RouterLink>
</div>

    </Container>)
}

export default ViewAcc;