import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../utils/utils";
import { CommentsCard } from "./CommentsCard";

export function Comments({ article_id }) {
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticle(article_id).then((res) => {
      const { data } = res;
      setComments(data.comments);
      setIsLoading(false);
    });
  }, []);

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
