import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Topics } from "./Topics";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/utils";

export function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res.data.topics);
    });
  }, []);

  return (
    <nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/articles">
                <Nav.Link>Articles Page</Nav.Link>
              </LinkContainer>{" "}
              {topics.map((topic) => (
                <LinkContainer key={topic.slug} to={`/topics/${topic.slug}`}>
                  <Nav.Link>{topic.slug}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
