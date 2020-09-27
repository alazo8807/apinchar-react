import React from 'react';
import './App.css';
import Timer from './Components/Timer/index';
import HomeChart from './Components/HomeChart/index';

function App() {
  return (
    <div className="App">
      <Timer></Timer>
      <HomeChart></HomeChart>
    </div>
  );
}

export default App;
