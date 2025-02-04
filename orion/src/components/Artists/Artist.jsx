import React from 'react'
import './artist.css';

export default function Artist() {
  return (
    <div>
      <div className="Artist">
        <div className="background-image2">
          <div className="glass-overlay2">
            <h1>Welcome to</h1>
            <h2>A kingdom of <span className="highlight">Artist</span></h2>
            <p>
              In the luminous Kingdom of Artists, inspired by the Renaissance, creativity is magic. The Citizens, known as Imaginarians, master AI-generated artistry, blending tradition with innovation. As the heart of Artists beats the HoloCanvas, where the ethereal meets the tangible. Classes of Imaginarians are divided into three levels: budding, strategic, and elite. Underlying their impressive artistry is the powerful "Cogitus" network, ensuring flawless AI-driven creations. Here, imagination knows no bounds, allowing Imaginarians to push the limits of reality. However, the Watchers, who first doubted AI art, now see the kingdom's glowing success. Unyielding, Imaginarians proudly safeguard their shared realm, proving that true art emerges from the perfect fusion of traditional technology, AI artistry, the brush—and the prompt—as majestic as their creations.
            </p>
            <div className="button-container2">
              <div className="level-item2">
                <button className="level-button2" onClick={() => window.location.href='/ArtistLvl1'}>Level 1</button>
                <p>Begin as a budding Imaginarian in Artists.</p>
              </div>
              <div className="level-item2">
                <button className="level-button2" onClick={() => window.location.href='/ArtistLvl2'}>Level 2</button>
                <p>Tackle intricate creations with strategic vision.</p>
              </div>
              <div className="level-item2">
                <button className="level-button2" onClick={() => window.location.href='/ArtistLvl3'}>Level 3</button>
                <p>Conquer masterful creations as an Elite Imaginarian.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}