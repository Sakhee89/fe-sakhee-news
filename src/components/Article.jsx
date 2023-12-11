import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ArticleCard } from "./ArticleCard";

export function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://sakhee-news.onrender.com/api/articles/${article_id}`)
      .then((res) => {
        const { data } = res;
        setArticle(data.article);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <ArticleCard article={article} />
    </section>
  );
}
