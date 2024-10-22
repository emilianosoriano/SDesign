import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Add a CSS file for styling

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle login logic
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Handle signup logic
    setIsLoggedIn(true);
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
