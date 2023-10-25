import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container fluid className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="#" className="text-light fs-2">
          AdeolaJr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll" className="">
          <div className="d-flex flex-row ms-auto nav_container">
            <Nav
              className=" my-2 text-light nav_con"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-light fs-5">
                Publications
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light fs-5">
                Experience
              </Nav.Link>

              <Nav.Link href="#" className="text-light fs-5">
                Blog
              </Nav.Link>
            </Nav>
            <Button className="text-white fs-4 p-2">Contact me</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
