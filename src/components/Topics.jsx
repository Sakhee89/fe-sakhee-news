import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/utils";
import { Link, useParams } from "react-router-dom";
import { ArticlesCard } from "./ArticlesCard";

export function Topics({ sortbyQuery, orderQuery }) {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setLoading(false);
      setTopics(res.data.topics);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (topic) {
      getArticles(topic, sortbyQuery, orderQuery).then((res) => {
        setLoading(false);
        setArticles(res.data.articles);
      });
    }
  }, [topic]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      {!topic &&
        topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <h2>{topic.slug}</h2>
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
