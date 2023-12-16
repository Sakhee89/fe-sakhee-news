import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Col, Row } from "react-bootstrap";

export function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <header id="main-header">
      <Row>
        <Col>
          {" "}
          <h1>Sakhee News</h1>
        </Col>
      </Row>
    </header>
  );
}
