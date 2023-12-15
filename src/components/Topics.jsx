import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/utils";
import { Link, useParams } from "react-router-dom";
import { ArticlesCard } from "./ArticlesCard";
import { Error } from "./Error";
import { Row } from "react-bootstrap";

export function Topics({ sortbyQuery, orderQuery }) {
  const { topic } = useParams();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (topic) {
      getArticles(topic, sortbyQuery, orderQuery)
        .then((res) => {
          setArticles(res.data.articles);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setApiError("Bad Request");
          } else {
            setApiError("Topic does not exist");
          }
          setLoading(false);
        });
    }
  }, [topic]);

  if (loading) {
    return <p>Loading...</p>;
  } else if (apiError) {
    return <Error message={apiError} />;
  }

  return (
    <section>
      <h2>{topic}</h2>
      <Row lg={3}>
        {topic &&
          articles.map((article) => {
            return <ArticlesCard key={article.article_id} article={article} />;
          })}
      </Row>
    </section>
  );
}
