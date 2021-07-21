import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          {/* <Nav.Link href="#education">Education</Nav.Link> */}
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#connect">Connect!</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
