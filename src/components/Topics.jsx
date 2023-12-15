import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/utils";
import { Link, useParams } from "react-router-dom";
import { ArticlesCard } from "./ArticlesCard";
import { Error } from "./Error";

export function Topics({ sortbyQuery, orderQuery }) {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    getTopics().then((res) => {
      setLoading(false);
      setTopics(res.data.topics);
    });
  }, []);

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
      <h2>Topics</h2>
      {!topic &&
        topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <p>{topic.slug}</p>
            </Link>
          );
        })}
      {topic &&
        articles.map((article) => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
    </section>
  );
}
