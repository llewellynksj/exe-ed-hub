import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col className="green">Main</Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
