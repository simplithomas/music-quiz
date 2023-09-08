import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Användaren har registrerats
        const user = userCredential.user;
      })
      .catch((error) => {
        // Hantera fel
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLogin = () => {
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
  };

  const handleLogout = () => {
    const auth = firebase.auth();
    auth.signOut()
      .then(() => {
        // Användaren har loggats ut
      })
      .catch((error) => {
        // Hantera fel
        console.error(error);
      });
  };

  const handlePasswordReset = () => {
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email)
      .then(() => {
        // E-post för lösenordsåterställning har skickats
      })
      .catch((error) => {
        // Hantera fel
        console.error(error);
      });
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
}

export default Login;
