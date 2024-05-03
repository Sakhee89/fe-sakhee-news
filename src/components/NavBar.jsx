import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/articles">
              <Nav.Link>Articles Page</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/topics/coding">
              <Nav.Link>Coding</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/topics/football">
              <Nav.Link>Football</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/topics/cooking">
              <Nav.Link>Cooking</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
