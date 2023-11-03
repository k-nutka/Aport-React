import React, { useState } from "react";
import styles from "./DogsImages.module.scss";

const DogsImages = ({ dogs, selectDog }) => {
  return (
    <div className={styles.sample_tiles}>
      {dogs.map((dog) => (
        <img
          className={styles.dog_image}
          src={dog.image.url}
          key={dog.id}
          onClick={() => selectDog(dog.name)}
        ></img>
      ))}
    </div>
  );
};

export default DogsImages;
