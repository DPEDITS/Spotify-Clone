import React from 'react';
import '../components/Music.css';
import Artists from './Artists';
import Cardsb from './Cards';

const Music = () => {
  return (
    <div className="music-container">
      <div className="music scrollable">
        <h1 className="trending">
          Trending Songs <button className="text-music1">Show All</button>
        </h1>
        <Cardsb />
        <h1 className="trending">
          Popular Artists <button className="text-music2">Show All</button>
        </h1>
        <Artists />
      </div>
    </div>
  );
};

export default Music;
