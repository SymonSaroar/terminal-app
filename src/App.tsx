import React, {useState} from 'react';
import Terminal from "./components/terminal/Terminal";
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className={"root-container"}>
      <Terminal/>
    </div>
  );
}

export default App;
