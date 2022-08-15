import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
        </Container>
      </Navbar>
    );
  }

export default Header;
