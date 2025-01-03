import React from "react";
import { Link } from 'react-scroll';
// import responsive from '../src/icons/responsive.gif';

const Head=()=>{
    return(
        <header>
            <nav>
                <div className="logo"><Link to="home" smooth={false} duration={500}><img src={`${process.env.PUBLIC_URL}/responsive.gif`} alt="logogif" className="logo-img" /></Link></div>
                <ul>
                <li><Link to="#" smooth={false} duration={500}>Home</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Head;