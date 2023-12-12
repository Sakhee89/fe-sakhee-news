import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://sakhee-news.onrender.com/api",
});

export function getArticles() {
  return newsApi.get("/articles");
}

export function getArticleById(article_id) {
  return newsApi.get(`/articles/${article_id}`);
}

export function getCommentsByArticle(article_id) {
  return newsApi.get(`/articles/${article_id}/comments`);
}

export function patchArticleVotes(article_id, inc_votes) {
  return newsApi.patch(`/articles/${article_id}`, inc_votes);
}