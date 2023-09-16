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
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
