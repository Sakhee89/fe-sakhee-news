import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticleById } from "../utils/utils";
import { Comments } from "./Comments";
import { Collapsible } from "./Collapsible";
import { CommentAdder } from "./CommentAdder";

export function Article() {
  const [comments, setComments] = useState({});
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      const { data } = res;
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id, setArticle, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <ArticleCard article={article} />
      <CommentAdder article_id={article.article_id} setComments={setComments} />
      <Collapsible descriptor="comments">
        <Comments
          article_id={article.article_id}
          comments={comments}
          setComments={setComments}
        />
      </Collapsible>
    </section>
  );
}
