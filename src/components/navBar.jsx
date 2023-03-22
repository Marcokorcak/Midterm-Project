import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <div className='nav'>
      <Navbar className="color-nav" fixed="top" >
        <Container>
          <Nav className="me-auto">

            <Nav.Link href="/logIn" className= "text-light">LogIn</Nav.Link>
            <Nav.Link href="/viewAccount" className= "text-light">Account</Nav.Link>
            <Nav.Link href="/viewCredit" className= "text-light">Credit</Nav.Link>
            <Nav.Link href="/makePayment" className= "text-light">Transfer</Nav.Link>
            <Nav.Link href="/settings" className= "text-light">Settings</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>     
      </div> 
      
    </>
  );
}

export default NavBar;