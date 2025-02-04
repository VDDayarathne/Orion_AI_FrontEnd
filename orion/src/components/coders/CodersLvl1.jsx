import React from 'react';
import './codersLvl1.css';

const CodersLvl1 = () => {
    return (
        <div className="background-image4">
            <div className="glass-overlay4">
                <h1>Level 1</h1>
                <p>
                Step into the Kingdom of Codex as a novice Apprentice Coder. Begin by learning the fundamental principles of programming and how code can transform concepts into reality. These early tasks will help you lay the groundwork for your future as a skilled programmer.
                </p>
                <div className="task-list4">
                    <button className="task-btn4">Task 1<br /><span>Write a Basic Program.</span></button>
                    <button className="task-btn4">Task 2<br /><span>Learn Key Syntax.</span></button>
                    <button className="task-btn4">Task 3<br /><span>Solve Simple Coding Problems.</span></button>
                    <button className="task-btn4">Task 4<br /><span>Debug Basic Errors.</span></button>
                    <button className="task-btn4">Task 5<br /><span>Understand Variables and Data Types.</span></button>
                    <button className="challenge-btn4">Challenge 1</button>
                </div>
            </div>
        </div>
    );
}

export default CodersLvl1;