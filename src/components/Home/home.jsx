import React from "react";
import './home.css';
import profileImg from '../../images/portrait.png'

export default function Home() {
    return(
        <section id="intro">
                <img src= {profileImg} alt="photo" className="photo" />
            <div className="introContent">
                <br />
                <span className="hello">Hi,</span>
                <br />
                <span className="introText">I am <span className="introName">James Carter</span> <br /> Full Stack Software Developer</span>
                <p className="introPara">
                    Welcome to my digital portfolio, where innovation meets code and creativity finds its digital canvas. <br/>
                    <br />
                    As a software developer, I have had the privilege of translating ideas into lines of code, turning concepts into functional and user-friendly applications, and contributing to the digital transformation of businesses and individuals alike. <br /> <br />
                    With each project, I have embraced challenges as opportunities, constantly learning and adapting to new technologies and methodologies. This portfolio is a testament to the skills I have honed and the experiences that have shaped me as a developer. <br /> <br />
                    Within these digital pages, you will find a curated collection of my work, showcasing a diverse range of projects, from web and mobile applications to software tools and more. Each piece represents not just a product, but a story of problem-solving, innovation, and collaboration.
                    </p>
            </div>
        </section>
    )
}