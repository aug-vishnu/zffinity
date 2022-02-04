import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Logo from "../Assets/logo2.png";
// import BgGif from "./BgGif";
// import bgGif from "../Assets/bggif12.gif";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="main-A-Icon" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <div className="d-flex d-lg-block d-none justify-content-center">
                {/* <img className="navGif" src={bgGif} alt="" /> */}
              </div>{" "}
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <span className="btn-nav">Home</span>
              </Nav.Link>
              <Nav.Link href="https://store.affinityservers.com/">
                <span className="btn-nav">Store</span>
              </Nav.Link>
              <Nav.Link href="profile" className="btn-cta">
                Login via Steam
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
