import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentsByArticleId } from "../utils/utils";

export function CommentAdder({ article_id, setComments }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState({
    username: currentUser,
    body: "",
  });

  function handleChange(event) {
    setNewComment({ ...newComment, body: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNewComment({
      username: currentUser,
      body: "",
    });
    setError("");
    setLoading(true);

    postCommentsByArticleId(article_id, newComment)
      .then((res) => {
        setLoading(false);
        setComments((previousComments) => {
          return [res.data.newComment, ...previousComments];
        });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  if (loading) {
    return <p>Please wait, posting your comment...</p>;
  }

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="body">
          Add Comment
          <Form.Control
            type="text"
            name="body"
            required
            placeholder="Comment..."
            value={newComment.body}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      {!currentUser ? <p>Log in to post a comment...</p> : null}
      {newComment.body.length < 2 ? (
        <p>Please enter a comment more than 1 characters long...</p>
      ) : null}
      {newComment.body.length > 50 ? <p>Message too Long!</p> : null}
      {error ? (
        <p>Post Failed, Please try again...</p>
      ) : (
        <p>{`${50 - newComment.body.length} characters remaining`}</p>
      )}
      <Button
        disabled={
          !currentUser ||
          newComment.body.length < 2 ||
          newComment.body.length > 50
        }
        variant="primary"
        type="submit"
      >
        Submit Comment
      </Button>
    </Form>
  );
}
