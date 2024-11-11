// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Auth = ({ onAuthStateChange }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!showLogin) {
      setShowLogin(true);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChange(true);
    } catch (error) {
      setError('Failed to log in');
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onAuthStateChange(true);
    } catch (error) {
      setError('Signup failed');
    }
  };

  return (
    <div className="auth-container">
      {showLogin && (
        <div className="auth-inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      <div className="auth-buttons">
        <button onClick={handleLogin}>{showLogin ? 'Submit' : 'Login'}</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Auth; 