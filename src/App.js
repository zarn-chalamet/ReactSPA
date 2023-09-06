import logo from './logo.svg';
import './App.css';
import image1 from "./assets/reactCourseLogo.png";

function App() {
  let name = "Zarni Tun"
  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      {/*relative url */}
      {/*<img src="/reactCourseLogo.png"></img>*/}

      {/*import*/}
      {/*<img src={image1}></img> */}

    </div>
  );
}

export default App;
