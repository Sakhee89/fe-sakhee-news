import { Card, Col } from "react-bootstrap";

export function ArticleCard({ article }) {
  return (
    <Col className="d-flex" style={{ margin: "10px" }}>
      <Card className="flex-fill">
        <Card.Title>Article Title: {article.title}</Card.Title>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Text>Author: {article.author}</Card.Text>
          <Card.Text>Topic: {article.topic}</Card.Text>
          <Card.Text>Created_at: {article.created_at}</Card.Text>
          <Card.Text>Votes: {article.votes}</Card.Text>
          <Card.Text>Comments: {article.comment_count}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
