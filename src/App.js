import React, {useEffect, useState} from "react";
import mainDog from "./images/mainDog.png";
import './App.scss';
import Searching from './components/Searching/Searching';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  const apiKey =
  "live_dJsh3SiYwCekpmIVtVIfO8z0lYo5PabuNpCyPDF71vAPmfofuJOI0uJnCvL6Serf";
  

   useEffect(()=>{
    axios.get('https://api.thedogapi.com/v1/breeds',
    {
      headers: {
        "x-api-key": apiKey,
      },

    }).then(response => setData(response.data))
    .catch(error => console.log(error))

   },[])

   console.log(data)


 





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
      <div className="container">
        <Searching/>
   

      </div>
    </div>
  );
}

export default App;










