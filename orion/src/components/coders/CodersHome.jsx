import React from 'react'
import './CodersHome.css';

export default function Coders() {
  return (
    <div>
      <div className="code">
        <div className="background-image4">
          <div className="glass-overlay4">
            <h1>Welcome to</h1>
            <h2>A kingdom of<span className="highlight"> Programmers</span></h2>
            <p>
            In the futuristic Kingdom of Codex, where lines of code shape the world, programming is an ancient and revered craft. The kingdom thrives on the precision and creativity of its citizens, known as Coders, who harness the power of code to build and innovate. At the heart of Codex lies the Techno Tower, a towering structure where the brightest minds gather for the prestigious Code Conclave. Guided by the visionary Architech Byte, the kingdom excels in merging human ingenuity with technological marvels. However, the rogue Debuggers, who fear the unchecked growth of technology, seek to disrupt this harmony. United by their skills and knowledge, the Coders prepare to safeguard their realm, proving that the code—and the coder—is mightier than any challenge.
            </p>
            <div className="button-container4">
              <div className="level-item4">
                <button className="level-button4" onClick={() => window.location.href='/CodersLvl1'}>Level 1</button>
                <p>Learn basic coding skills.</p>
              </div>
              <div className="level-item4">
                <button className="level-button4" onClick={() => window.location.href='/CodersLvl2'}>Level 2</button>
                <p>Solve complex programming challenges.</p>
              </div>
              <div className="level-item4">
                <button className="level-button4" onClick={() => window.location.href='/CodersLvl3'}>Level 3</button>
                <p>Create advanced systems and solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}