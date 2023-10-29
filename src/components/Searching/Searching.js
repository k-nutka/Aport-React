import React from "react";
import styles from "./Searching.module.scss";

const searching = () => {
  return (
    <div>
      <div className="searching">
        <input list="options" className={styles.searching__input}></input>
        <datalist id="options" className={styles.searching__list}>
          <option></option>
        </datalist>
        <button className={styles.searching__submit}>Submit</button>
      </div>
      <div className="searching-info"></div>
    </div>
  );
};

export default searching;
