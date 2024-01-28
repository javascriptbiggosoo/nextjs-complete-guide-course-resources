import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList() {
  const [modalIsVisible, setModalisVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const handleHideModal = () => {
    setModalisVisible(false);
  };
  const handleChangeBody = (event) => {
    setEnteredBody(event.currentTarget.value);
  };
  const handleChangeAuthor = (event) => {
    setEnteredAuthor(event.currentTarget.value);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={handleHideModal}>
          <NewPost
            onBodyChange={handleChangeBody}
            onAuthorChange={handleChangeAuthor}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="안현모" body="ㅇㅇ" />
        <Post author="안현모" body="ㅇㅇ" />
      </ul>
    </>
  );
}
