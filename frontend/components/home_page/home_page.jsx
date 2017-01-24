import React from 'react';
import GeneratorContainer from '../generator/generator_container';

const HomePage = (props) => {
  return (
    <div className="home-page">
      <h1 className="header-title">Welcome to Eiga!</h1>
      <GeneratorContainer />
    </div>
  );
};

export default HomePage;
