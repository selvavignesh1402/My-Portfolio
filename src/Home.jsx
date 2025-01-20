import React from 'react';
import ProfilePic from './selvapic2.png'; 
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section id="home">
        <div className="img-flex">
        <div className="intro">
          <p>Hey, I'm Selvavignesh 👋</p>
          <h1><span className="highlight">Full-Stack</span> Developer</h1>
          <p>Welcome to my portfolio Where creativity meets expertise</p>
          <div className="buttons">
            <Link className="btn primary" to="contact" smooth={true} duration={500}>Get In Touch</Link>
            <a href="/Selvavignesh_V_Resume.pdf" className="btn secondary" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        </div>
          <div className="profile-pic">
          <img src={ProfilePic} alt="Luca" />
        </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
