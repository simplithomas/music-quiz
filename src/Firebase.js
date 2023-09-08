import React from 'react';
import firebase from './firebase'; // Importera firebase från firebase.js
import Quiz from './components/Quiz';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inloggning lyckades
      })
      .catch((error) => {
        // Hantera fel
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Quiz App</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Logga in</button>
        <Quiz />
      </header>
    </div>
  );
}

export default App;
    