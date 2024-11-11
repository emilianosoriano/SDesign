import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Lesson1 from './components/lessons/Lesson1.jsx';
import Lesson2 from './components/lessons/Lesson2.jsx';
import Lesson3 from './components/lessons/Lesson3.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
      </Routes>
    </Router>
  );
};

export default App;