import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            Logo
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2023 KSL Design
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              Icon
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              Icon
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              Icon
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
};

export default Footer;
