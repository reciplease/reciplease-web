import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ping, setPing] = useState("");

  useEffect(() => {
    fetch(
      "/api/ping",
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setPing(response.express);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">{ping}</h1>
      </header>
    </div>
  );
}

export default App;
