import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="content-container">
      <h1>Welcome to the Coding Fundamentals Course</h1>
      <p>Select a lesson to start learning:</p>
      <ul>
        <li><Link to="/lesson1">Lesson 1: Introduction to Variables</Link></li>
        <li><Link to="/lesson2">Lesson 2: Control Structures</Link></li>
        <li><Link to="/lesson3">Lesson 3: Functions</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 