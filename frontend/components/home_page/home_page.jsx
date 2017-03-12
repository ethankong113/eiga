import React from 'react';
import GeneratorContainer from '../generator/generator_container';

const HomePage = (props) => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <img className="cover-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1489296989/eiga/assets/pexels-photo-321111.jpg" />
        <div className="generator-frame">
          <h1 className="header-title">Welcome to Eiga!</h1>
          <GeneratorContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
