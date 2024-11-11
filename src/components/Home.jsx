import React from 'react';
import Auth from './auth/Auth';
import Navigation from './layout/Navigation';
import '../styles/components/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Auth />
      <Navigation />
    </div>
  );
};

export default Home;