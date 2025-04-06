import React from 'react'
import '../components/Library.css'
import { FaPlus } from "react-icons/fa6";

const Library = () => {
  return (
    <div className='library'>
      <div className='library1'>
        <h1 className='l1'>Your Library</h1>
        <button className='l2'><FaPlus /></button>
      </div>
      <div className="scrollable">
  <div className="playlist-card">
    <div className="card-title">Create your first playlist</div>
    <div className="card-subtext">It's easy, we'll help you</div>
    <button className="card-button">Create playlist</button>
  </div>
  <div className="playlist-card">
    <div className="card-title">Let's find some podcasts to follow</div>
    <div className="card-subtext">We'll keep you updated on new episodes</div>
    <button className="card-button">Browse podcasts</button>
  </div>
</div>
<div className="buttonstext">
    <button className="button1">Legal</button>
    <button className="button1">Safety & Privacy Center</button>
    <button className="button1">Privacy Policy</button>
    <button className="button1">Cookies</button>
    <button className="button1">About Ads</button>
    <button className="button1">Accessibility</button>
  </div>
</div>
  )
}

export default Library
