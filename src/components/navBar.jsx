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
            <Nav.Link href="/logIn">logIn</Nav.Link>
            <Nav.Link href="/viewAccount">Account</Nav.Link>
            <Nav.Link href="/viewCredit">Credit</Nav.Link>
            <Nav.Link href="/makePayment">Transfer</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
      </div> 
      
    </>
  );
}

export default NavBar;