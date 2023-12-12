import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ArticlesCard({ article }) {
  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <article>
      <Col className="d-flex" style={{ margin: "10px" }}>
        <Card className="flex-fill">
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Text>Author: {article.author}</Card.Text>
            <Card.Text>Topic: {article.topic}</Card.Text>
            <Card.Text>Votes: {article.votes}</Card.Text>
            <Card.Text>Comments: {article.comment_count}</Card.Text>
            <Card.Text>Created_at: {formattedDate}</Card.Text>
            <Link to={`/articles/${article.article_id}`}>
              <Button variant="primary">View Article</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </article>
  );
}
