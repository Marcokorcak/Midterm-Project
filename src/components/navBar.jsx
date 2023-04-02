import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Navbar className="color-nav" fixed="top">
          <Container>
            <Nav className="me-auto">
              <a href="/" className="text-light \">
                  LogOut
                </a>
              <a href="viewAccount" className="text-light \">
                  Accounts
                </a>
              <a href="/viewCredit" className="text-light \">
                  Credits
                </a>
              <a href="/transferMoney" className="text-light \">
                  Transfer
                </a>              
              <a href="/settings" className="text-light \">
                  Settings
                </a>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
