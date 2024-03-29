import styles from "../styles/NavBar.module.css";
import logo from "../assets/exeedhublogo.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import {
  useSetCurrentUser,
  useCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedOutNav = (
    <>
      <Nav className="me-auto">
        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Schools
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Primary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Secondary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Sixth Form/College
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Discussion
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Popular Threads
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Topics
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Pre-Loved
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            New Items
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Categories
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="ms-auto">
        <Nav.Link
          className={`${styles.SecTextCol} ${styles.PrimHover}`}
          href="#link"
        >
          Login
        </Nav.Link>
        <Nav.Link
          className={`${styles.SecTextCol} ${styles.PrimHover}`}
          href="#link"
        >
          Register
        </Nav.Link>
      </Nav>
    </>
  );

  const loggedInNav = (
    <>
      <Nav className="me-auto">
        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Schools
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Primary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Secondary
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Sixth Form/College
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Add a Review
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Discussion
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Popular Threads
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Topics
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Start a Discussion
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title={
            <span className={`${styles.PrimTextCol} ${styles.SecHover}`}>
              Pre-Loved
            </span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            href="#action/3.1"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            New Items
          </NavDropdown.Item>
          <NavDropdown.Item
            href="#action/3.2"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Browse Categories
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#action/3.3"
            className={`${styles.PrimTextCol} ${styles.SecHover}`}
          >
            Post an Item
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="ms-auto">
        <Nav.Link
          className={`${styles.SecTextCol} ${styles.PrimHover}`}
          href="#link"
        >
          {currentUser?.username}
        </Nav.Link>
        <Nav.Link
          className={`${styles.SecTextCol} ${styles.PrimHover}`}
          href="#link"
          onClick={handleSignOut}
        >
          Logout
        </Nav.Link>
      </Nav>
    </>
  );

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} height="48vh" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? loggedInNav : loggedOutNav}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
