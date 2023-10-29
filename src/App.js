
import mainDog from "./images/mainDog.png";
import './App.scss';
import Searching from './components/Searching/Searching';


function App() {


 





  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <img src={mainDog} className="header-content__img" alt="dog" />
          <p className="header-content__title">Aport</p>
          <p className="header-content__text">
            Choose a dog and learn more about it
          </p>
        </div>
      </header>
      <div className="container">
        <Searching/>
   

      </div>
    </div>
  );
}

export default App;










