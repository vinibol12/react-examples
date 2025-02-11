import React, { useState } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState('ON');

  const handleClick = () => {
    setToggle(toggle === 'ON' ? 'OFF' : 'ON');
  };

  return (
    <div className="toggle">
      <button onClick={handleClick}>{toggle}</button>
    </div>
  );
}

export default App;
