import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../utils/utils";
import { CommentsCard } from "./CommentsCard";

export function Comments({ article_id, comments, setComments }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticle(article_id).then((res) => {
      const { data } = res;
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id, setComments, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      {comments.map((comment) => {
        return <CommentsCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
}
