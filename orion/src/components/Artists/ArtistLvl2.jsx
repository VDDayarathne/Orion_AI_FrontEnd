import React from 'react';
import './artistLvl1.css';

const ArtistLvl2 = () => {
    return (
        <div className="background-image2">
            <div className="glass-overlay2">
                <h1>Level 2</h1>
                <p>
                Step into the Realm of Creation as a skilled Artisan, building on your foundational knowledge to craft more intricate works of art. Explore the Studio of Discovery, where you'll tackle tasks that refine your skills and unlock new creative possibilities. Prove your growing expertise and prepare for the challenges ahead.</p>
                <div className="task-list2">
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA21'}>Task 1<br /><span>Create a dynamic background scene.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA22'}>Task 2<br /><span>Design a character with multiple accessories.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA23'}>Task 3<br /><span>Generate a themed abstract image.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA24'}>Task 4<br /><span>Illustrate a set of everyday objects.</span></button>
                    <button className="task-btn2"onClick={() => window.location.href='/TaskA25'}>Task 5<br /><span>Apply advanced color gradients to an image.</span></button>
                    <button className="challenge-btn2">Challenge 2</button>
                </div>
            </div>
        </div>
    );
}

export default ArtistLvl2;