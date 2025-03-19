import React from 'react'
import Header from './nav'
import './App.css';
import './index.css';
import About from './About_hero'
import Realestate from './Career';
import Explore_RealEastate from './CoreBelives';
import  RealEstateBanner from './Mission';



const App = () => {
  return (
    <>
      <Header />
      <About />
      <Realestate />
      <Explore_RealEastate />
      <RealEstateBanner />
      {/* <Mission /> */}
    </>
  )
}

export default App