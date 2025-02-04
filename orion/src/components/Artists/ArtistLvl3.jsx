import React from 'react';
import './artistLvl1.css';

const ArtistLvl3 = () => {
    return (
        <div className="background-image2">
            <div className="glass-overlay2">
                <h1>Level 3</h1>
                <p>
                Ascend to the Atelier of Mastery as an Elite Imaginarian, where your artistic prowess reaches new heights. Take on tasks that challenge your creativity and technique, showcasing your command over AI and artistry. Prove yourself a true visionary in the Kingdom of Artists.</p>
                <div className="task-list2">
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA31'}>Task 1<br /><span>Create a detailed scene with multiple elements.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA32'}>Task 2<br /><span>Design a character with expressive emotions.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA33'}>Task 3<br /><span>Generate a vibrant abstract pattern.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA34'}>Task 4<br /><span>Illustrate a complex object with intricate details.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA35'}>Task 5<br /><span>Apply layered filters to enhance depth and texture.</span></button>
                    <button className="challenge-btn2">Challenge 3</button>
                </div>
            </div>
        </div>
    );
}

export default ArtistLvl3;