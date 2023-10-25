import PropTypes from "prop-types"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"

const NavBar = ({ handleExperience, handlePublication,handleFooter }) => {

  

 
  return (
    <Navbar expand="lg" className="bgnav text-light allnav">
      <Container fluid className="d-flex flex-row justify-content-between">
        <Navbar.Brand href="#" className="text-light fs-2 bgbrand">
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
              <Nav.Link href="#" onClick={handlePublication} className="text-light fs-5">
                Publications
              </Nav.Link>
              <Nav.Link href="#" onClick={handleExperience} className="text-light fs-5">
                Experience
              </Nav.Link>

              <Nav.Link href="#" className="text-light fs-5">
                Blogs
              </Nav.Link>
            </Nav>
            <button className="text-white fs-5 but" onClick={handleFooter}>Contact me</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  handleExperience: PropTypes.func.isRequired,
  handlePublication: PropTypes.func.isRequired,
  handleFooter: PropTypes.func.isRequired,
};

export default NavBar;
