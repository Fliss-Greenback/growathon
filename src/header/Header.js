import Navbar from "react-bootstrap/Navbar";
import { Container, Image } from "react-bootstrap";
import Growathon from "./growathon_logo.png";
import PMLogo from "../landingpage/PLantme_logo.png";
import Pollinator from "../landingpage/pp.png";

function Header() {

    return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Growathon logo"
              src={Growathon}
              height="60"
              className="d-inline-block align-top-left"
            />{""}
          <h4 className="d-inline-block align-top-right">Brought to you by:  </h4>
          <Image className="collaborator-img" src={PMLogo}></Image>
            <Image className="collaborator-img" src={Pollinator}></Image>
          </Navbar.Brand>

        </Container>
      </Navbar>
    );
  }

export default Header;
