import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
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
        <Col className="red">
          <SideBar />
        </Col>
        <Col className="green">Main</Col>
      </Row>
    </Container>
  );
}

export default App;
