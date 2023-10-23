import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid className="bg-dark text-white h-auto" style={{maxHeight:"300px"}}>
      <Row>
        <Col>Twitter</Col>
        <Col>LinkedIn</Col>
        <Col>Instagram</Col>
      </Row>
      <Row>
        <Col>09090612374 (Home)</Col>
        <Col>aremuadeola97@gmail.com</Col>
        <Col>www.linkedin.com/in/aremuadeola-jr-213055155 (LinkedIn)</Col>
      </Row>
    </Container>
  );
}

export default Footer;
