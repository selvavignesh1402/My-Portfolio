import React from 'react';
import './skills.css';

import cplus from '../src/icons/cplus.png';
import javaIcon from '../src/icons/java.png';
import htmlIcon from '../src/icons/html.png';
import cssIcon from '../src/icons/css-3.png';
import jsIcon from '../src/icons/js.png';
import reactIcon from '../src/icons/react.png';
import pythonIcon from '../src/icons/python.png';
import jhipster from '../src/icons/jhipster-svgrepo-com.png';
import selenium from '../src/icons/selenium.png';
import springboot from '../src/icons/spring-boot.png';
import sql from '../src/icons/sql.png';
import aws from '../src/icons/web.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container1">
        <div className="skill">
          <img src={htmlIcon} alt="HTML5" className="skill-icon" />
          HTML
        </div>
        <div className="skill">
          <img src={cssIcon} alt="CSS3" className="skill-icon" />
          CSS
        </div>
        <div className="skill">
          <img src={jsIcon} alt="JavaScript" className="skill-icon" />
          JavaScript
        </div>
       <div className="skill">
          <img src={reactIcon} alt="React" className="skill-icon" />
          React
        </div>
       <div className="skill">
          <img src={jhipster} alt="React" className="skill-icon" />
          JHipster
        </div>
      </div>
      <div className="skills-container2">
        <div className="skill">
          <img src={javaIcon} alt="Java" className="skill-icon" />
          Java
        </div>
        <div className="skill">
          <img src={cplus} alt="C++" className="skill-icon" />
          C++
        </div>
        <div className="skill">
          <img src={pythonIcon} alt="Python" className="skill-icon" />
          Python
        </div>
        <div className="skill">
          <img src={sql} alt="Python" className="skill-icon" />
          SQL
        </div>
      </div>
      <div className="skills-container3">
        <div className="skill">
          <img src={selenium} alt="Java" className="skill-icon" />
          Selenium
        </div>
        <div className="skill">
          <img src={springboot} alt="C++" className="skill-icon" />
          Spring-Boot
        </div>
        <div className="skill">
          <img src={aws} alt="C++" className="skill-icon" />
          AWS
        </div>
      </div>
    </section>
  );
};

export default Skills;
