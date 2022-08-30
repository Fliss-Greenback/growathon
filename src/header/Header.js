import Navbar from "react-bootstrap/Navbar";
import { Container, Image } from "react-bootstrap";
import Growathon from "./growathon_logo.png";
import PMLogo from "../landingpage/PLantme_logo.png";
import Pollinator from "../landingpage/pp.png";
import "./Header.css"

function Header() {

    return (
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Growathon logo"
              src={Growathon}
              className="collaborator-img"
            />{""}
            <Image className="collaborator-img" src={PMLogo} href='https://plantme.io'></Image>
            <Image className="collaborator-img" src={Pollinator}></Image>
          </Navbar.Brand>

        </Container>
      </Navbar>
    );
  }

export default Header;
