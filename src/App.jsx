import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [ping, setPing] = useState("");

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/ingredients`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setPing(response.length);
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
