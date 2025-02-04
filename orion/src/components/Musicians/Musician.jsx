import React from 'react'
import './musician.css';

export default function Musician() {
  return (
    <div>
      <div className="music">
        <div className="background-image3">
          <div className="glass-overlay3">
            <h1>Welcome to</h1>
            <h2>A kingdom of<span className="highlight"> Musician</span></h2>
            <p>
              In the luminous Kingdom of Artists, inspired by the Renaissance, creativity is magic. The Citizens, known as Imaginarians, master AI-generated artistry, blending tradition with innovation. As the heart of Artists beats the HoloCanvas, where the ethereal meets the tangible. Classes of Imaginarians are divided into three levels: budding, strategic, and elite. Underlying their impressive artistry is the powerful "Cogitus" network, ensuring flawless AI-driven creations. Here, imagination knows no bounds, allowing Imaginarians to push the limits of reality. However, the Watchers, who first doubted AI art, now see the kingdom's glowing success. Unyielding, Imaginarians proudly safeguard their shared realm, proving that true art emerges from the perfect fusion of traditional technology, AI artistry, the brush—and the prompt—as majestic as their creations.
            </p>
            <div className="button-container3">
              <div className="level-item3">
                <button className="level-button3" onClick={() => window.location.href='/MusicianLvl1'}>Level 1</button>
                <p>Learn basic music creation.</p>
              </div>
              <div className="level-item3">
                <button className="level-button3" onClick={() => window.location.href='/MusicianLvl2'}>Level 2</button>
                <p>Create complex melodies and rhythms.</p>
              </div>
              <div className="level-item3">
                <button className="level-button3" onClick={() => window.location.href='/MusicianLvl3'}>Level 3</button>
                <p>Master grand musical compositions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}