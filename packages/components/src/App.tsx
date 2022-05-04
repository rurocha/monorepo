import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@monorepo/shared'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color="#fcc">blabla</Button>
      </header>
    </div>
  );
}

export default App;
