import React from 'react';
import './artistLvl1.css';

const ArtistLvl1 = () => {
    return (
        <div className="background-image2">
            <div className="glass-overlay2">
                <h1>Level 1</h1>
                <p>
                Enter the enchanting Kingdom of Artistry as a budding Artifex, where the magic of AI meets the canvas of your imagination. Embark on your artistic journey in the Gallery of Beginnings, where you'll uncover the secrets of image creation and refinement. Prove your creative flair by conquering these foundational tasks and setting the stage for your artistic evolution.
                </p>
                <div className="task-list2">
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA1'}>Task 1<br /><span>Create a Simple Landscape.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA2'}>Task 2<br /><span>Design a Basic Character.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA3'}>Task 3<br /><span>Generate a Basic Abstract Image.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA4'}>Task 4<br /><span>Illustrate a Common Object.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA5'}>Task 5<br /><span>Apply Basic Filters.</span></button>
                    <button className="challenge-btn2">Challenge 1</button>
                </div>
            </div>
        </div>
    );
}

export default ArtistLvl1;