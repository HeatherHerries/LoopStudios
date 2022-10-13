import '../styles/Leader.css'
import LeaderImg from '../assets/images/desktop/image-interactive.jpg'
import React from 'react'

function Leader() {
  return (
    <div className='leader-container'>
      <img className=''src={LeaderImg} alt="" />
      <div className='text-container'>
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </div>
  )
}

export default Leader
