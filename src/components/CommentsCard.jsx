export function CommentsCard({ comment }) {
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <section className="comment-section">
      <h2>Commented by {comment.author}</h2>
      <article className="comment-body">{comment.body}</article>
      <p>votes: {comment.votes}</p>
      <p>{formattedDate}</p>
    </section>
  );
}
