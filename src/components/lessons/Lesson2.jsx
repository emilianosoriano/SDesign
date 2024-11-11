import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson2 = () => {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckAge = () => {
    if (age >= 18) {
      setMessage('You are eligible to vote.');
    } else {
      setMessage('You are not eligible to vote.');
    }
  };

  return (
    <div>
      <h1>Lesson 2: Control Structures</h1>
      <p>Control structures help us manage the flow of execution in our programs...</p>
      <h3>Example: Conditional Statement</h3>
      <pre>
        {`function checkNumber(number) {
          if (number > 0) {
            console.log("The number is positive.");
          } else if (number < 0) {
            console.log("The number is negative.");
          } else {
            console.log("The number is zero.");
          }
        }`}
      </pre>
      <h3>Exercise: Voting Eligibility</h3>
      <p>Enter your age to check if you are eligible to vote:</p>
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Enter your age" 
      />
      <button onClick={handleCheckAge}>Check Eligibility</button>
      <p>{message}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/lesson3">
          <button>Next Lesson</button>
        </Link>
      </div>
      


    </div>
  );
};

export default Lesson2;
