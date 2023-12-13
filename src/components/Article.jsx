import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticleById } from "../utils/utils";
import { Comments } from "./Comments";
import { Collapsible } from "./Collapsible";

export function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
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
      <Collapsible descriptor="comments">
        <Comments article_id={article.article_id} />
      </Collapsible>
    </section>
  );
}
