import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function FetchData() {

  const [fetching, setFetching] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  const fetchData = () => {
    setFetching(true);
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        setFetching(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setFetching(false);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button disabled={fetching} onClick={fetchData}>Fetch</button>
        {fetching && <p>Loading...</p>}
        <div>
          {jsonData && Object.entries(jsonData).map(([key, value]) => (
            <div key={key} style={{ display: 'flex' }}>
              <dl>{key}</dl>
              <dd>{value.toString()}</dd>
            </div>
          ))}
        </div>
      </header>
    </div>
  )
}

export default FetchData;