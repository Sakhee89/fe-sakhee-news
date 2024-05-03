import { DeleteButton } from "./DeleteButton";

export function CommentsCard({ comment, setComments }) {
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <section className="comment-section">
      <h2 className="comment-title">Comment by {comment.author}</h2>
      <article className="comment-body">{comment.body}</article>
      <p className="votes">Total votes: {comment.votes}</p>
      <p id="comment-time">{formattedDate}</p>
      <DeleteButton comment={comment} setComments={setComments} />
    </section>
  );
}
