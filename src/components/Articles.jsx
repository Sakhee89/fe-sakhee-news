import axios from "axios";
import { ArticlesCard } from "./ArticlesCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sakhee-news.onrender.com/api/articles").then((res) => {
      const { data } = res;
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Row lg={3}>
        <h2>Articles</h2>
        {articles.map((article) => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
      </Row>
    </section>
  );
}
