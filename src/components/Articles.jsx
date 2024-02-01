import { ArticlesCard } from "./ArticlesCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getArticles } from "../utils/utils";
import { Sort } from "./Sort";

export function Articles({
  topicQuery,
  sortbyQuery,
  orderQuery,
  setSortbyQuery,
  setOrderQuery,
}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topicQuery, sortbyQuery, orderQuery).then((res) => {
      const { data } = res;
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topicQuery, sortbyQuery, orderQuery]);

  if (isLoading) {
    return <p>Page loading...</p>;
  }

  return (
    <section>
      <h2>Articles</h2>
      <Sort
        sortbyQuery={sortbyQuery}
        orderQuery={orderQuery}
        setSortbyQuery={setSortbyQuery}
        setOrderQuery={setOrderQuery}
      />
      <Row lg={3}>
        {articles.map((article) => {
          return <ArticlesCard key={article.article_id} article={article} />;
        })}
      </Row>
    </section>
  );
}
