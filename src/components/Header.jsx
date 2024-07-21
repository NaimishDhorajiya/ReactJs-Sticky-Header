import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import LogoImage from "../assets/Images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const MenuItem = [
    {
      id: 1,
      name: "Home",
      href: "/home",
    },
    {
      id: 2,
      name: "Services",
      href: "/services",
    },
    {
      id: 3,
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#">
          <img src={LogoImage} alt="logo_img" height={40} width={40} />
        </Navbar.Brand>
        <Navbar.Toggle
          // aria-controls="offcanvasNavbar"
          className="d-lg-none"
          onClick={handleShow}
        />
        <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
          <Nav>
            {MenuItem.map((item, index) => {
              return (
                <Nav.Link href={item.href} key={index}>
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Offcanvas
          // id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {MenuItem.map((item, index) => {
                return (
                  <Nav.Link href={item.href} key={index} onClick={handleClose}>
                    {item.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
