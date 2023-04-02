import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar1() {
  return (
    <>
      <div className="nav">
        <Navbar className="color-nav" fixed="top">
          <Container>
            <Nav className="me-auto">
                <a href="/" className="text-light \">
                  Login
                </a>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar1;
