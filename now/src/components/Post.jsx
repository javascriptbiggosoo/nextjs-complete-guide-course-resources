import React from "react";

export default function Post({ author, body }) {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}
