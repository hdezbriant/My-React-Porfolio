import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#features">About Me</Nav.Link>
          <Nav.Link href="#pricing">Education</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
