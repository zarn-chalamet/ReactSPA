import React from "react";
import "./index.css";
import Styles from "./single_post.module.css";

export default function PostLists({ posts }) {
  return (
    <div className="postList container">
      {posts.map((post) => (
        <div className={`single-post ${Styles.card}`} key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
}
