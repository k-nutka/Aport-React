import React, { useEffect, useState } from "react";
import "./App.scss";
import mainDog from "./images/mainDog.png";
import axios from "axios";
import DogsImages from "./components/DogsImages/DogsImages";
import DogsNames from "./components/DogsNames/DogsNames";
import DogCard from "components/DogCard/DogCard";

function App() {
  let [dogs, setDogs] = useState([]);
  let [selectedDog, setSelectedDog] = useState(null);

  const apiKey =
    "live_dJsh3SiYwCekpmIVtVIfO8z0lYo5PabuNpCyPDF71vAPmfofuJOI0uJnCvL6Serf";

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "x-api-key": apiKey,
        },
      })
      .then((res) => {
        setDogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectDog = (dogName) => {
    const dog = dogs.find((dog) => dog.name === dogName);
   setSelectedDog(dog);
  };

  // const removeSelectedDog = () => {
  //   setSelectedDog(null);
  // }

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
      <div>
        {selectedDog ? (
          <DogCard selectedDog={selectedDog} removeSelectedDog={selectDog} />
        ) : (
          <React.Fragment>
            <div className="container">
              <DogsNames dogs={dogs} selectDog={selectDog} />
            </div>
            <div className="images">
              <DogsImages dogs={dogs} selectDog={selectDog} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
