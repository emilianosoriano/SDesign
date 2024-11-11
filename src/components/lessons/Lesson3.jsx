import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Lesson3 = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState('');

  // Function to calculate the area of a rectangle
  const calculateArea = (length, width) => {
    return length * width;
  };

  const handleCalculate = () => {
    const result = calculateArea(Number(length), Number(width));
    setArea(result);
  };

  return (
    <div>
      <h1>Lesson 3: Functions</h1>
      <p>Functions are blocks of reusable code that perform specific tasks...</p>
      
      <h3>Example: Basic Function</h3>
      <pre>
        {`function addNumbers(a, b) {
          return a + b;
        }

        const result = addNumbers(5, 10);
        console.log(result);  // Output: 15
        `}
      </pre>

      <h3>Exercise: Calculate the Area of a Rectangle</h3>
      <p>Enter the length and width of the rectangle:</p>
      <input
        type="number"
        placeholder="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Area</button>
      
      {area && <p>The area of the rectangle is: {area}</p>}
    </div>
  );
};

export default Lesson3;
