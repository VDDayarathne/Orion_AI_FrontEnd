import React from 'react';
import './WriterLvl1.css';


const WriterLvl2 = () => {
    return (
        <div className="background-image1">
            <div className="glass-overlay1">
                <h1>Level 2</h1>
                <p>
                    Embark on your journey as a budding Promptian. Learn the basics of prompt crafting and master the foundation of the Kingdom of Writers. 
                    Progress simple challenges and gain the knowledge needed to forge a career as a Promptian. As you grow, you'll earn the respect of the 
                    Argoals of Gozo, mastering the fine art of commanding words.
                </p>


                <div className="task-list">
                    
        

                <div className="task-list1">
                    <button className="task-btn1"onClick={() => window.location.href='/Task1'}>Task 1<br /><span>Simple Email Writing and reply.</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task2'}>Task 2<br /><span>Speech Writing.</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task3'}>Task 3<br /><span>Social Media Post</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task4'}>Task 4<br /><span>Blog Post Summary</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task5'}>Task 5<br /><span>Text Summary</span></button>

                    <button className="challenge-btn1">Challenge 1</button>

                </div>
            </div>
        </div>
     </div>
    
    );
}

export default WriterLvl2;
