import axios from "axios";
import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://sakhee-news.onrender.com/api/articles").then((res) => {
      const { data } = res;
      setArticles(data.articles);
    });
  }, []);

  return (
    <Row lg={3}>
      <h2>articles</h2>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </Row>
  );
}
