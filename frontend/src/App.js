import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello') // Browser needs to resolve localhost
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Use .text() as our backend returns a plain string
      })
      .then(data => setMessage(data))
      .catch(error => {
        console.error("There was an error fetching the backend data!", error);
        setMessage("Failed to connect to backend. Check console for details.");
      });
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from Backend:
        </p>
        <h1>{message || 'Loading...'}</h1> {/* Display message or loading */}
      </header>
    </div>
  );
}

export default App;