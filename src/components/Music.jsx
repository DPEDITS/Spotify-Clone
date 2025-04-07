import React from 'react'
import '../components/Music.css'
import Cardsb from './Cards'
const Music = () => {
  return (
    <div className='music'>
      <h1 className='trending'>Trending Songs <button className="text-music1">Show All</button></h1>
      <Cardsb/>
      
    </div>
  )
}

export default Music
