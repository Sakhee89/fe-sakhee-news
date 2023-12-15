import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticleById } from "../utils/utils";
import { Comments } from "./Comments";
import { Collapsible } from "./Collapsible";
import { CommentAdder } from "./CommentAdder";
import { Error } from "./Error";

export function Article() {
  const [comments, setComments] = useState();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        if (res.status >= 400) {
          throw res;
        }
        setArticle(res.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setApiError("Bad Request");
        } else {
          setApiError("Article does not exist");
        }
        setIsLoading(false);
      });
  }, [article_id, setArticle, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (apiError) {
    return <Error message={apiError} />;
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
