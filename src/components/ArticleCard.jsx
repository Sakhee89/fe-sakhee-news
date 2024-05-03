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
    <article className="article-section d-flex justify-content-center">
      <Card className="w-75">
        <Card.Title className="p-3 fw-bold">{article.title}</Card.Title>
        <Card.Img
          variant="top"
          className="article-img img-fluid w-50 mx-auto d-block"
          src={article.article_img_url}
        />
        <Card.Body>
          <Card.Text className="fw-bolder">
            Written by {article.author}
          </Card.Text>
          <Card.Text className="fw-bolder">Topic: {article.topic}</Card.Text>
          <Card.Text> {article.body}</Card.Text>
          <Card.Text className="fw-light">Votes: {votes} </Card.Text>
          <Card.Text className="fw-light">
            Total Comments: {article.comment_count}
          </Card.Text>
          <Card.Text className="fw-light">
            Created_at: {formattedDate}
          </Card.Text>
          <Button
            disabled={voted > 3}
            onClick={() => handleArticleVote("upvote")}
            id="upvote-button"
            variant="primary"
            className="m-2"
          >
            Upvote
          </Button>
          <Button
            disabled={voted > 3}
            onClick={() => handleArticleVote("downvote")}
            id="downvote-button"
            variant="primary"
            className="m-2"
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
