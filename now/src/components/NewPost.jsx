import React, { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const handleChangeBody = (event) => {
    setEnteredBody(event.currentTarget.value);
  };
  const handleChangeAuthor = (event) => {
    setEnteredAuthor(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onCancel();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChangeBody} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleChangeAuthor} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
