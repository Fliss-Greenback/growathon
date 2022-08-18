import { Button, Image, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PlantMe from "./PlantMe.png";
import Home2 from "./Home2.png";
import Herald from "./nzherald.png";
import Stuff from "./STUFF.png";
import Tehiku from "./tehiku.png";
import Upperhutt from "./upperhutt.png";
import WCC from "./wcc.png";


import "./LandingPage.css";

function LandingPage() {
  let navigate = useNavigate();
  
  return (
    <>
      <div className="background-image">
        <Image className="img-overlay" src={PlantMe} fluid="True"></Image>
      </div>
      <Link to="/register">
        <Button variant="primary" size="lg" className="button-responsive"           
        onClick={() => {
            console.log(`/register/`);
            console.log(navigate(`{/register}`));
            console.log(`/dpen/{/register}`);
          }}> 
          Sign Up
        </Button>
      </Link>
      <div className="light-text"><h4 > Sign up and get notified as soon as the Growathon app goes live.</h4></div>
      
        <div className="light-text"><h4>Be the first to start growing your rewards.</h4></div>
      <div className="second-section-homepage">
        <div className="sub-section">
          <h4 className="dark-text">Brought to you by:</h4>
        </div>
        <Row className="d-flex justify-content-md-center">
          <Col xs={4} sm={4} md={4}>
            <div className="sub-section">
              <h2 className="dark-text">Our supporters:</h2>
            </div>
            <Image className="collaborator-img" src={WCC} fluid="True"></Image>
            <Image className="collaborator-img" src={Upperhutt} fluid="True"></Image>
 
          <div>
          <h2 className="dark-text">Featured by:</h2>
        </div>
        <div className="sub-section">
              <Image className="collaborator-img" src={Herald}></Image>
              <Image className="collaborator-img" src={Stuff}></Image>
              <Image className="collaborator-img" src={Tehiku}></Image>
        
        </div>
          </Col>
        </Row>

      <div className="sub-section">
        <Row className="justify-content-md-center">

        </Row>
      </div>
      <div>
        
      </div>
      </div>
      

      <div className="section-image">
        <Image src={Home2} fluid="True"></Image>
      </div>
    </>
  );
}
export default LandingPage;
