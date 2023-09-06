import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import image1 from "./assets/reactCourseLogo.png";

function App() {
  let [name,setName] = useState("Zarni Tun");//[getter,setterFun]

  let changeName = () => {
    setName("Zarn");
    console.log(name);
  }
  
  return (
    <div className='app'>
      
    
      <h1>Hello {name}</h1>
      <button onClick={changeName}>
        Change Name
      </button>
      {/*relative url */}
      {/*<img src="/reactCourseLogo.png"></img>*/}

      {/*import*/}
      {/*<img src={image1}></img> */}

    </div>
  );
}

export default App;
