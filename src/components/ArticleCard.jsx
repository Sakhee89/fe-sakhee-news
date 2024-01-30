import { Card, Col, Button } from "react-bootstrap";
import { patchArticleVotes } from "../utils/utils";
import { useState } from "react";

export function ArticleCard({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [voted, setVoted] = useState(0);
  const [error, setError] = useState(false);
  const formattedDate = new Date(article.created_at).toLocaleString();

  const changedVotes = { inc_votes: 0 };

  function handleArticleVote(vote) {
    setError(false);
    if (vote === "upvote") {
      changedVotes.inc_votes = 1;
    } else {
      changedVotes.inc_votes = -1;
    }

    patchArticleVotes(article.article_id, changedVotes)
      .then((res) => {
        const { data } = res;
        setVotes(data.article.votes);
        setVoted(voted + 1);
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <article className="article-section">
      <Card className="flex-fill">
        <Card.Title>{article.title}</Card.Title>
        <Card.Img
          variant="top"
          className="article-img img-fluid w-50 mx-auto d-block"
          src={article.article_img_url}
        />
        <Card.Body>
          <Card.Text>Author: {article.author}</Card.Text>
          <Card.Text>Topic: {article.topic}</Card.Text>
          <Card.Text> {article.body}</Card.Text>
          <Card.Text>Votes: {votes} </Card.Text>
          <Card.Text>Comments: {article.comment_count}</Card.Text>
          <Card.Text>Created_at: {formattedDate}</Card.Text>
          <Button
            disabled={voted > 3}
            onClick={() => handleArticleVote("upvote")}
            id="upvote-button"
            variant="primary"
          >
            Upvote
          </Button>
          <Button
            disabled={voted > 3}
            onClick={() => handleArticleVote("downvote")}
            id="downvote-button"
            variant="primary"
          >
            Downvote
          </Button>
        </Card.Body>
      </Card>
      {error ? <p>Something went wrong, your vote did not register</p> : null}
      {voted > 3 ? <p>You have reached the maximum votes</p> : null}
    </article>
  );
}
