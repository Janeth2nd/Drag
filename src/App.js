import React, { useEffect, useState } from "react";
import { Photos } from "./components/Photos";
import './styles.css';

const App = () => {

  const [photos, setPhotos] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos/";


  const fetchPhotos = (apiUrl) => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchPhotos(apiUrl);
  }, [])
  console.log(apiUrl)
  return (
    <div class="main">
      <div class="card">
        <Photos photos={photos} />
      </div>
      {/* <div  draggable="true" class="square1">hello</div>
<div draggable="true" class="square2">Kosmos</div> */}
    </div>
  );
};


export default App

