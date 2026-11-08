
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error(error);
        setMessage('Unable to connect to backend');
      });
  }, []);

  return (
    <div>
      <h1>Welcome to PeerLink</h1>
      <p>Peer-to-Peer Micro-Tutoring Platform</p>

      <h2>Backend Response:</h2>
      <p>{message}</p>

      <button>Find a Tutor</button>
    </div>
  );
}

export default App;
