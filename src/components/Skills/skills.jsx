import React from "react";
import './skills.css';

export default function Skills() {
    return (
        <section id="skills">
            <span className="skillTitle">My Tech Skills</span>
            <span className="skillDescription">I have recently graduated General Assembly's Software Engineering Immersive Course, and I have an understanding of HTML, CSS and Javascript. Listed below are the other skills I have attained through this course.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="https://cdn-icons-png.flaticon.com/512/2362/2362366.png" alt="languages" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Programming Languages</h2>
                        <p>I have learned JavaScript and Python through my course with General Assembly.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="https://cdn-icons-png.flaticon.com/512/5203/5203012.png" alt="framework" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Frameworks</h2>
                        <p>I have learned React, Django and Express frameworks through my course with General Assembly.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149206.png" alt="css" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Database Manipulation</h2>
                        <p>In my projects, I used several different databases to store information for my applications; MongoDB/Atlas, Neon and Amazon S3. We also used PostgreSQL and non SQL databases.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="https://cdn-icons-png.flaticon.com/512/8448/8448908.png" alt="css" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Styling Frameworks</h2>
                        <p>In my projects, I used a variety of CSS, Bootstrap, Tailwind and Materialize to style my applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}