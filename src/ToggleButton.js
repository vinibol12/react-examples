import React, { useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState('ON');

  const handleClick = () => {
    setToggle(toggle === 'ON' ? 'OFF' : 'ON');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>{toggle}</button>
      </header>
    </div>
  );
}

export default App;
