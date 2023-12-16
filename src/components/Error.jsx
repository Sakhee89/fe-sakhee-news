import { Alert } from "react-bootstrap";

export function Error({ message }) {
  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}
