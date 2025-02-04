import React from 'react';
import './musicianLvl1.css';

const MusicianLvl1 = () => {
    return (
        <div className="background-image3">
            <div className="glass-overlay3">
                <h1>Level 1</h1>
                <p>
                Enter the enchanting Kingdom of Harmonium as an aspiring Melodist. Embark on your initial musical quest by mastering the essential notes and rhythms that are the building blocks of every composition. Complete these foundational tasks to start your journey toward becoming a musical virtuoso.
                </p>
                <div className="task-list3">
                    <button className="task-btn3">Task 1<br /><span>Play Basic Scales.</span></button>
                    <button className="task-btn3">Task 2<br /><span>Compose a Simple Melody.</span></button>
                    <button className="task-btn3">Task 3<br /><span>Identify Key Instruments.</span></button>
                    <button className="task-btn3">Task 4<br /><span>Practice Rhythmic Patterns.</span></button>
                    <button className="task-btn3">Task 5<br /><span>Listen and Analyze.</span></button>
                    <button className="challenge-btn3">Challenge 1</button>
                </div>
            </div>
        </div>
    );
}

export default MusicianLvl1;