import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import image1 from "./assets/reactCourseLogo.png";

function App() {
  let [name, setName] = useState("Zarni Tun"); //[getter,setterFun]

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

  let changeName = () => {
    setName("Zarn");
    console.log(name);
  };

  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  let deletePost = (id) => {
    setPosts((previousState) => previousState.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Change Name</button>
      {/*relative url */}
      {/*<img src="/reactCourseLogo.png"></img>*/}

      {/*import*/}
      {/*<img src={image1}></img> */}

      <h2>Post</h2>
      <ul>
        {posts.map((post) => (
          <li>
            {post.title}
            <button onClick={() => deletePost(post.id)}>delete</button>
          </li>
        ))}
      </ul>

      <h2>Count : {count} </h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
