import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DebounceSearch from './DebounceSearch';
import FetchData from './FetchData';
import ToggleButton from './ToggleButton';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <p>Toggle Button</p>
          <ToggleButton/>
        </div>

        <div>
          <p>Fetch Data</p>
          <FetchData/>
        </div>

        <div>
          <p>Debounce Search</p>
          <DebounceSearch/>
        </div>

      </header>
    </div>
  );
}

export default App;