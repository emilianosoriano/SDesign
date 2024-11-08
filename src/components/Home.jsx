import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Home.css'; // Add a CSS file for styling

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningup, setIsSigningup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Failed to log in');
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Signup failed');
    }
  };

  return (
    <div className="home-container">
      <div className="auth-container">
        {!isLoggedIn ? (
          <div className="auth-buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        ) : (
          <p>Welcome back!</p>
        )}
      </div>
      
      <div className="content-container">
        <h1>Welcome to the Coding Fundamentals Course</h1>
        <p>Select a lesson to start learning:</p>
        <ul>
          <li><Link to="/lesson1">Lesson 1: Introduction to Variables</Link></li>
          <li><Link to="/lesson2">Lesson 2: Control Structures</Link></li>
          <li><Link to="/lesson3">Lesson 3: Functions</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
