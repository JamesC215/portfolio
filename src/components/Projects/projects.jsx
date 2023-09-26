import React from "react";
import './projects.css'
import Project1 from '../../images/Project1.png'
import Project2 from '../../images/Project2.png'
import Project3 from '../../images/Project3.png'
import Project4 from '../../images/Project4.png'

export default function Projects() {
    return (
        <section id="projects">
           <h2 className="projectsTitle">My Portfolio</h2>
           <span className="projectsDescription">Over the course of my time studying on my course with General Assembly, we were set four projects over the course of the 12 weeks. This is a collection of my projects and links to my deployed work, and also my GitHub repositories that you can read at your leisure.</span>
           <div className="projectImgs">
            <a href="https://github.com/JamesC215/Spaceman-Game/blob/main/README.md">
            <img src= {Project1} alt="screenshot" className="projectImg" />
            </a>
            <a href="https://github.com/JamesC215/RESTful-Routes/blob/main/README.md">
            <img src= {Project2} alt="screenshot" className="projectImg" />
            </a>
            <a href="https://github.com/JamesC215/fitmein/blob/main/README.md">
            <img src= {Project3} alt="screenshot" className="projectImg" />
            </a>
            <a href="https://github.com/JamesC215/adopt-me/blob/main/README.md">
            <img src= {Project4} alt="screenshot" className="projectImg" />
            </a>
           </div>
        </section>
    )
}