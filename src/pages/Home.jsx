import React from 'react';
import Navbar from '../components/Navbar';
import Library from '../components/Library';
import Music from '../components/Music';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Library />
        <Music />
      </div>
      <Footer />
    </>
  );
};

export default Home;
