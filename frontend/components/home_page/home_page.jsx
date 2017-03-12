import React from 'react';
import GeneratorContainer from '../generator/generator_container';

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <img className="cover-img" src="assets/home_banner.jpeg" />
        <div className="generator-frame">
          <h1 className="header-title">Welcome to Eiga!</h1>
          <GeneratorContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
