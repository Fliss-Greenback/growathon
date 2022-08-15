import "./LandingPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import HeroImg from "./landing_page_phone.svg";

export const Hero = () => {
  return (
    <Container className="HeroSec">
      <Row xs={1} md={2}>
        <Col className="landing_main_text">
          <br></br>
          <div>
            <h4>
              Put your hand up if you&apos;re concerned about climate change.
            </h4>
          </div>
          <div>
            Did you know that urban gardens can reduce emissions by 7.8%?
          </div>
          <br></br>
          <div>
            <h1>Let&apos;s grow together!</h1>
          </div>
        </Col>
        <Col>
          <Image className="heroImg" src={HeroImg} />
        </Col>
      </Row>
    </Container>
  );
};
