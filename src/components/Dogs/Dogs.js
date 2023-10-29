import React, { useEffect, useState } from "react";
import styles from "./Dogs.module.scss";
import axios from "axios";

const Dogs = () => {

  const [data, setData] = useState([]);

  const apiKey =
    "live_dJsh3SiYwCekpmIVtVIfO8z0lYo5PabuNpCyPDF71vAPmfofuJOI0uJnCvL6Serf";

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "x-api-key": apiKey,
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const options = data; 



  return(
    <div>
      {/* ... inny JSX */}
      <datalist id="options" className={styles.searching__list}>
        {options.map((option) => (
          <option key={option.id} value={option.name} />
        ))}
      </datalist>
      {/* ... inny JSX */}
    </div>


  )
};

export default Dogs;
