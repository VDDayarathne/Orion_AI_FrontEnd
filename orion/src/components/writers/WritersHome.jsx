import React from 'react'
import './writers_home.css';

export default function Writers() {
  return (
    <div>
      <div className="writer">
        <div className="background-image1">
          <div className="glass-overlay1">
            <h1>Welcome to</h1>
            <h2>A kingdom of<span className="highlight"> Writers</span></h2>
            <p>
            In the ancient Kingdom of Writes, inspired by Greek civilization, words hold magical power. The citizens, known as Promptians, are trained in the sacred art of AI prompting, crafting commands to unlock the potential of intelligent machines. At the heart of Writes stands the Acropolis of Code, where promptsmiths gather for the legendary Prompting Games. Under the wise rule of Queen Sophia, the kingdom thrives, blending human ingenuity with AI marvels. However, the shadowy Silencers threaten this harmony, fearing the rise of AI. United by knowledge, the Promptians prepare to defend their realm, proving the pen—and the prompt—is mightier than the sword.
            </p>
            <div className="button-container1">
              <div className="level-item1">
                <button className="level-button1" onClick={() => window.location.href='/WriterLvl1'}>Level 1</button>
                <p>Begin as a budding Promptian in Writes.</p>
              </div>
              <div className="level-item1">
                <button className="level-button1" onClick={() => window.location.href='/WriterLvl2'}>Level 2</button>
                <p>Tackle complex tasks with strategic thinking.</p>
              </div>
              <div className="level-item1">
                <button className="level-button1" onClick={() => window.location.href='/WriterLvl3'}>Level 3</button>
                <p>Conquer challenging feats as master promptsmith.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

