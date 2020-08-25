import React from 'react';
import Heading from './Heading';
import Event from './Event';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
        <Event />
    </div>
  );
}

export default App;