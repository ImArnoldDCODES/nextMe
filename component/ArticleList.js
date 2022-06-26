import React from "react";
import ArticleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article}/>
      ))}
    </div>
  );
}
