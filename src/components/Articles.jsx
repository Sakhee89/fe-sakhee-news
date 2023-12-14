import { ArticlesCard } from "./ArticlesCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getArticles } from "../utils/utils";
import { useSearchParams } from "react-router-dom";

export function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortbyQuery = searchParams.get("sortby");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    getArticles(topicQuery, sortbyQuery, orderQuery).then((res) => {
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
