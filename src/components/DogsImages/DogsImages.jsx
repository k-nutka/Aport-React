import React from "react";
import styles from "./DogsImages.module.scss";

const DogsImages = (props) => {
  return (
    <div className={styles.sample_tiles}>
      {props.dogs.map((dog) => (
        <img
          className={styles.dog_image}
          src={dog.image.url}
          key={dog.id}
        ></img>
      ))}
    </div>
  );
};

export default DogsImages;
