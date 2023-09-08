import React from 'react';
import Quiz from './components/Quiz'; // Importera Quiz-komponenten från mappen components

function App() {
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

const auth = firebase.auth();

auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Inloggning lyckades
    const user = userCredential.user;
  })
  .catch((error) => {
    // Hantera fel
    const errorCode = error.code;
    const errorMessage = error.message;
  });
