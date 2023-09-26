import React from 'react';
import './NavBar.css'
import { Link } from 'react-scroll';
import contactImg from '../../images/contact.png'

export default function NavBar() {
    return (
        <nav className="navbar">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/09/12/JC-logo-design-vector-Graphics-17164869-1-580x386.jpg" alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuButton" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={ contactImg } alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    );
}