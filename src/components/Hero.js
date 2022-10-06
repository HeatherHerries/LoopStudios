import '../styles/Hero.css'
import HeroImg from '../assets/images/desktop/image-hero.jpg'
import React, {useState} from 'react'

function Hero() {

  const [menuOpen, menuToggle] = useState(false);

  const handleMenuToggle = () => {
    menuToggle(!menuOpen);
  };

  
  return (
    <div className='container'>
      <nav>
        <div className='logo'>
          <h1>loopstudios</h1>
        </div>
        <ul className={`menu${menuOpen ? ' active'  : ''}`}>
          <li className='link'><a href="#">About</a></li>
          <li className='link'><a href="#">Careers</a></li>
          <li className='link'><a href="#">Events</a></li>
          <li className='link'><a href="#">Products</a></li>
          <li className='link'><a href="#">Support</a></li>
        </ul>
        <div onClick={handleMenuToggle}className='hamburger'>
          <i className='fa-solid fa-bars fa-lg'></i>
        </div>
      </nav>
      <img src={HeroImg} alt="" />
     
      <div className='tagline-container'>
        <h1 className='tagline'>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
    </div>
  )
}

export default Hero
