import { useEffect, useState } from "react";
import { getArticlesByTopic, getTopics } from "../utils/utils";
import { Link, useParams } from "react-router-dom";
import { ArticlesCard } from "./ArticlesCard";

export function Topics() {
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
      getArticlesByTopic(topic).then((res) => {
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
