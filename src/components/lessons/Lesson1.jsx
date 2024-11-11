import React from 'react';
import { Link } from 'react-router-dom';


const Lesson1 = () => {
  return (
    <div className="lesson-container">
      <h1>Lesson 1: Introduction to Variables</h1>
      <h2>What are Variables?</h2>
      <p>A variable is a named storage location in memory that holds a value.</p>
      <h3>Types of Variables:</h3>
      <ul>
        <li>Number</li>
        <li>String</li>
        <li>Boolean</li>
      </ul>
      <h3>Declaring Variables:</h3>
      <pre>
        {`let age = 25; // Number
const name = "Alice"; // String
var isStudent = true; // Boolean`}
      </pre>
      <h3>Example: Calculate the Area of a Rectangle</h3>
      <pre>
        {`let length = 5; // Length of the rectangle
let width = 10; // Width of the rectangle
let area = length * width;
console.log("The area of the rectangle is: " + area);`}
      </pre>
      <h3>Exercise:</h3>
      <p>Write a program to calculate the circumference of a circle.</p>
      <pre>
        {`let radius = 7; // Change this value
let circumference = 2 * Math.PI * radius;
console.log("The circumference of the circle is: " + circumference);`}
      </pre>

      <div style={{ marginTop: '20px' }}>
        <Link to="/lesson2">
          <button>Next Lesson</button>
        </Link>
      </div>
    </div>
  );
};

export default Lesson1;
