import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import ProjetService from "./services/projetService";

const App = () => {


  useEffect( () => {
    (async function () {
      let test = await ProjetService.all().then(response => {console.log(response.data)}).catch(error => {
        console.error(error);
      });
    })()
  })


  return (
    <div className="App">
     

    </div>
  );
};

export default App;
