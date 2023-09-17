import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/index";
import PostLists from "./components/postList";
import Modal from "./components/Modal/index";

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
    {
      id: 3,
      title: "Third Post",
    },
  ]);

  return (
    <>
      <Navbar />
      <PostLists posts={posts} />
      <Modal>
        <h1>Zoom class is available now.</h1>
        <p>
          feel free to{" "}
          <a href="https://www.youtube.com/watch?v=9JiW1UrLiBo">join</a> here
        </p>
      </Modal>
    </>
  );
}

export default App;
