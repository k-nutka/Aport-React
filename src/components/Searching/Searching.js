import React from "react";
import styles from "./Searching.module.scss";
import Dogs from "../Dogs/Dogs"

const searching = () => {
  return (
    <div>
      <div className="searching">
        <input list="options" className={styles.searching__input}></input>
        <Dogs/>
        <button className={styles.searching__submit}>Submit</button>

      </div>

      <div className="searching-info"></div>
    </div>
  );
};

export default searching;

