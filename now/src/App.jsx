import { useState } from "react";
import MainHeader from "./components/MainHeader";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalisVisible] = useState(true);

  const handleShowModal = () => {
    setModalisVisible(true);
  };
  const handleHideModal = () => {
    setModalisVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={handleShowModal} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={handleHideModal} />
      </main>
    </>
  );
}

export default App;
