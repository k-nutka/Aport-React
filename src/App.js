import mainDog from "./images/mainDog.png";
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <img src={mainDog} className="header-content__img" alt="dog" />
          <p class="header-content__title">Aport</p>
          <p class="header-content__text">
            Choose a dog and learn more about it
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;










