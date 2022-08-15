import { Button, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import PlantMe from "./PlantMe.png";
import Home2 from "./Home2.png";
import Herald from "./nzherald.png";
import Pollinator from "./pp.png";
import Stuff from "./STUFF.png";
import Tehiku from "./tehiku.png";
import Upperhutt from "./upperhutt.png";
import WCC from "./wcc.png";

import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="background-image">
        <Image className="img-overlay" src={PlantMe} fluid="True"></Image>
      </div>

      <Link to="/login">
        <Button variant="primary" size="lg" className="button-responsive">
          Sign Up
        </Button>
      </Link>
      <div className="second-section-homepage">
        <div className="sub-section">
          <h2 className="dark-text">Our charity partners:</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={4}>
            <Image src={Pollinator}></Image>
          </Col>
        </Row>
      </div>
      <div className="sub-section">
        <h2 className="dark-text">Our generous funders:</h2>
      </div>
      <div className="sub-section">
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={4}>
            <Image src={WCC} fluid="True"></Image>
          </Col>
          <Col>
            <Image src={Upperhutt}></Image>
          </Col>
        </Row>
      </div>
      <div>
        <div>
          <h2 className="dark-text">Featured by:</h2>
        </div>
        <div className="sub-section">
          <Row className="justify-content-md-center">
            <Col xs={12} sm={4} md={4}>
              <Image src={Herald}></Image>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <Image src={Stuff}></Image>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <Image src={Tehiku}></Image>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section-image">
        <Image src={Home2} fluid="True"></Image>
      </div>
    </>
  );
}
export default LandingPage;
