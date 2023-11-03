import React from "react";
import styles from "./DogCard.module.scss";

const DogCard = ({ selectedDog, removeSelectedDog }) => {
  console.log(selectedDog);
  let temperamentArray = selectedDog.temperament.split(",");

  const handleBackButton = (event) => {
    event.preventDefault();
    removeSelectedDog();
  };

  return (
    <div className={styles.info}>
      <div className={styles.info__card}>
        <div className={styles.breedName}>{selectedDog.name}</div>
        <div className={styles.breedImage}>
          <img className={styles.breedImage__img} src={selectedDog.image.url} alt = {selectedDog.name}></img>
        </div>
        <div className={styles.breedFor}>{selectedDog.bred_for}</div>
        <div className={styles.breedGroup}>{selectedDog.breed_group}</div>
        <div className={styles.lifeSpan}>{selectedDog.life_span}</div>
        <ul className={styles.temperament__list}>
          {temperamentArray.map((element) => (
            <li key={element} className={styles.list}>
              {element}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleBackButton} className={styles.info__back}>
        Back To Menu
      </button>
    </div>
  );
};

export default DogCard;
