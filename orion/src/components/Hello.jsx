import React from 'react';
import './hello.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div className="hello-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
        <img src="./Images/hero.png" alt="Hero" class="head-image"/>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Orion AI</h1>
          <p className="hero-description">
            In the boundless expanse of the Cosmos, where the stars whisper secrets of the universe, lies the wondrous realm of OrionAI. This futuristic domain is a vibrant constellation of knowledge and adventure, where the pursuit of AI mastery transcends mere learning to become an epic quest. Here, the Starborn Scholars embark on a thrilling odyssey across four illustrious kingdoms: the Kingdom of Writers, the Kingdom of Artists, the Kingdom of Musicians, and the Kingdom of Programmers.
            <br /><br />
            Each kingdom shines with its own unique brilliance: the Kingdom of Writers, where stories come alive through the power of words; the Kingdom of Artists, where imagination is sculpted into reality; the Kingdom of Musicians, where melodies merge with innovation; and the Kingdom of Programmers, where codes form the backbone of creation.
            <br /><br />
            Guided by the radiant Orions, the realm’s wise mentors, and armed with the luminous tools of knowledge, you will navigate challenges, unlock secrets, and master the art of AI prompting. As the ancient Prophecies of Orion foretell, the future is in your hands. Embrace the journey, for in this galaxy of discovery, the limits are as boundless as the stars.
          </p>
          <br /><br />
          <p variant="light" >Start Your Journey</p>
          <Link to='/login'>
         
            <a class="head-button">Join Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hello;