import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';
import "../index.css"




const Header = () => {
 


    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''}  `
    }

    return <Container className="con">
        <nav>

            <RouterLink className={getClassName} to="/logIn">Log In</RouterLink>
            <RouterLink className={getClassName} to="/viewAccount">Account </RouterLink>
            <RouterLink className={getClassName} to="/viewCredit">Credit</RouterLink>
            <RouterLink className={getClassName} to="/makePayment">Payment</RouterLink>
            <RouterLink className={getClassName} to="/transferMoney">Transfers</RouterLink>
            <RouterLink className={getClassName} to="/settings">Settings</RouterLink>

        </nav>

     </Container>
}

export default Header; 