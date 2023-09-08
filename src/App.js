import React, { useState } from 'react';
import firebase from 'firebase/app'; // Importera firebase
import 'firebase/auth'; // Importera Firebase auth
import Quiz from './components/Quiz';
import Login from './components/Login';

function App() {
  const [email, setEmail] = useState(''); // Definiera email som en state-variabel
  const [password, setPassword] = useState(''); // Definiera password som en state-variabel


  return (
    <div className="App">
      <header className="App-header">
        {/* Ta bort all onödig kod här */}
        <h1>Music Quiz App</h1>
        <Quiz /> {/* Här inkluderar du din Quiz-komponent */}
      </header>
    </div>
  );
}

export default App;

