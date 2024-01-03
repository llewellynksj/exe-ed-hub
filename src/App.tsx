import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import SchoolList from "./pages/schools/SchoolList";
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
        <Col className="green">
          <Row>
            <SchoolList />
          </Row>
          <Row>
            <Welcome />
          </Row>
          <Row>Discussion Section</Row>
          <Row>Pre-Loved Section</Row>
        </Col>
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
