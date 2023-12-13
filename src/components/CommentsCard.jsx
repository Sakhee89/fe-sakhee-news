import { DeleteButton } from "./DeleteButton";

export function CommentsCard({ comment, setComments }) {
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <section className="comment-section">
      <h2>Commented by {comment.author}</h2>
      <article className="comment-body">{comment.body}</article>
      <p>votes: {comment.votes}</p>
      <p>{formattedDate}</p>
      <DeleteButton comment={comment} setComments={setComments} />
    </section>
  );
}
