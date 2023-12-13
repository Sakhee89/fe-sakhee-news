import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-bootstrap";
import { deleteCommentsById } from "../utils/utils";

export function DeleteButton({ comment, setComments }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [deleting, setDeleting] = useState(false);

  function deleteComment() {
    setDeleting(true);
    setError(false);
    deleteCommentsById(comment.comment_id)
      .then(() => {
        setDeleting(false);
        setComments((prevComments) => {
          return prevComments.filter((prevComment) => {
            return prevComment.comment_id !== comment.comment_id;
          });
        });
      })
      .catch((err) => {
        setDeleting(true);
        setError(true);
      });
  }

  return (
    <section>
      {comment.author === currentUser ? (
        <Button onClick={deleteComment}>Delete Comment</Button>
      ) : null}
      {error ? (
        <p>Deleting comment was unsuccessful, please try again</p>
      ) : null}
      {deleting ? <p>Deleting Comment</p> : null}
    </section>
  );
}
