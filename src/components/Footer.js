import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav1.png";
import navIcon2 from "../assets/img/nav2.jpg";
import navIcon3 from "../assets/img/nav3.png";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
     <Row className="align-items-center">
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
