import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SchoolImage from "../../assets/school.jpg";

const SchoolList = () => {
  return (
    <div className="px-4 m-4">
      <h1 className="text-center">Top Rated Schools</h1>
      <Container fluid className="px-4">
        <Row className="justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 overflow-hidden">
          <Col className="my-2">
            <Card className="mx-auto" style={{ width: "80%" }}>
              <Card.Img variant="top" src={SchoolImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            <Card className="mx-auto" style={{ width: "80%" }}>
              <Card.Img variant="top" src={SchoolImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            <Card className="mx-auto" style={{ width: "80%" }}>
              <Card.Img variant="top" src={SchoolImage} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SchoolList;
