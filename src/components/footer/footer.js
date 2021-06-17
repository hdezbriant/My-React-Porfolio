import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" id="connect">
      <Nav className="mx-auto">
        <Nav.Link href="https://github.com/hdezbriant" className="text-warning">
          Github
        </Nav.Link>
        <Nav.Link
          href="https://www.linkedin.com/in/hernandez-brian/"
          className="text-warning"
        >
          Linkedin
        </Nav.Link>
        <Nav.Link href="mailto:hernandez.briant@gmail.com" className="text-warning">
          E-mail me!
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
