import React, { useState } from "react";
import styles from "./DogsNames.module.scss";

const DogsNames = ({dogs, selectDog}) => {
  const [inputData, setInputData] = useState("");
  const [searchingInfo, setSearchingInfo] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData === "") {
      setSearchingInfo("Enter your dog's breed");
      setTimeout(() => {
        clean();
      }, 2000);
    } else {
      let result = dogs.some((dog) => dog.name === inputData);

      if (!result) {
        setSearchingInfo("There is no dog breed listed in our catalogue");
        setTimeout(() => {
          clean();
        }, 2000);
      } else {
        selectDog(inputData);
      }
    }
  };

  const clean = () => {
    setInputData("");
    setSearchingInfo("");
  };

  return (
    <div>
      <div className="searching">
        <input
          value={inputData}
          onChange={handleInputChange}
          list="options"
          className={styles.searching__input}
        ></input>
        <datalist id="options" className={styles.searching__list}>
          {dogs.map((dog) => (
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
