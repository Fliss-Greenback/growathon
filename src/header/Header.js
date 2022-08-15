import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Wallet from "../Wallet/Wallet";

function Header() {

    return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Growathon logo"
              src="/images/logo-light.png"
              width="30"
              height="30"
              className="d-inline-block align-top-leftr"
            />{" "}
            Growathon
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            </LinkContainer>
          </Nav>
          <Wallet />
        </Container>
      </Navbar>
    );
  }

export default Header;
