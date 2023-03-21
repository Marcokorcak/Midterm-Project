import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';
import React from 'react';


const Header = () => {
 


    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:scale-150 transition duration-300 `
    }

    return <Container>
        <nav className="flex gap-4">
      
            <RouterLink className={getClassName} to="/logIn">LogIn</RouterLink>
            <RouterLink className={getClassName} to="/viewAccount">Account Overview</RouterLink>
            <RouterLink className={getClassName} to="/viewCredit">Credit</RouterLink>
            <RouterLink className={getClassName} to="/makePayment">Make A Payment</RouterLink>
            <RouterLink className={getClassName} to="/transferMoney">Transfers</RouterLink>
            <RouterLink className={getClassName} to="/settings">Settings</RouterLink>

        </nav>

     </Container>
}

export default Header; 