import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const handleChangeBody = (event) => {
    setEnteredBody(event.currentTarget.value);
  };
  const handleChangeAuthor = (event) => {
    setEnteredAuthor(event.currentTarget.value);
  };
  return (
    <>
      <NewPost
        onBodyChange={handleChangeBody}
        onAuthorChange={handleChangeAuthor}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="안현모" body="ㅇㅇ" />
        <Post author="안현모" body="ㅇㅇ" />
      </ul>
    </>
  );
}
