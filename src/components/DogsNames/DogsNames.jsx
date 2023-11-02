import React, { useState } from "react";
import styles from "./DogsNames.module.scss";
import DogCard from "components/DogCard/DogCard";

const DogsNames = (props) => {
  const [inputData, setInputData] = useState("");
  const [dogExists, setDogExists] = useState(false);
  const [searchingInfo, setSearchingInfo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData === "") {
      setSearchingInfo("Enter your dog's breed");
      setDogExists(false);
      setTimeout(() => {
        clean();
      }, 2000);
    } else {
      let result = props.dogs.some((dog) => dog.name === inputData);

      if (!result) {
        setSearchingInfo("There is no dog breed listed in our catalogue");
        setDogExists(false);
        setTimeout(() => {
          clean();
        }, 2000);
      } else {
        setDogExists(true);
      }
    }
  };

  const clean = () => {
    setInputData("");
    setSearchingInfo("");
  };

  return (
    <div>
      {dogExists && <DogCard inputData={inputData} />}
      <div className="searching">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          list="options"
          className={styles.searching__input}
        ></input>
        <datalist id="options" className={styles.searching__list}>
          {props.dogs.map((dog) => (
            <option key={dog.id} value={dog.name} />
          ))}
        </datalist>

        <button onClick={handleSubmit} className={styles.searching__submit}>
          Submit
        </button>
      </div>
      <div className={styles.searching__info}>{searchingInfo}</div>
    </div>
  );
};

export default DogsNames;
