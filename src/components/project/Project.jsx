import React from "react";
import "./project.css";
import Image01 from '../../assets/VideoGameTracker.png';
import Image02 from '../../assets/MVC Blog.png';
import Image03 from '../../assets/Note Taker.png';
import Image04 from '../../assets/JATE.png';
import Image05 from '../../assets/Employee Tracker.png';
import Image06 from '../../assets/Team Generator.png';
import Image07 from '../../assets/Leash.png'


const projects = [{
  id: 1,
  image: Image01,
  title: 'Video Game Tracker',
  github: 'https://github.com/eSTee3/Video-Game-Tracker',
  demo:'https://team01-project.herokuapp.com/'
},
 {
  id: 2,
  image: Image02,
  title: 'MVC Tech Blog',
  github: 'https://github.com/eSTee3/MVC-Tech-Blog',
  demo:'https://estee3-tech-blog.herokuapp.com/'
  }, 
 {
  id: 3,
  image: Image03,
  title: 'Express Note Taker Application',
  github: 'https://github.com/eSTee3/Note-Taker-App',
   demo: 'https://estee3-note-taker-app.herokuapp.com/'
  },
 {
  id: 4,
  image: Image04,
  title: 'JATE: Just Another Text Editor (PWA-Based)',
  github: 'https://github.com/eSTee3/PWA-Text-Editor',
  demo:'https://jate-by-estee3.herokuapp.com/'
  },
 {
  id: 5,
  image: Image05,
  title: 'CLI-Based Employee Tracker',
  github: 'https://github.com/eSTee3/Employee-Tracker',
  demo:'https://github.com/eSTee3/Employee-Tracker/blob/main/resources/Application%20Demo.gif'
  },
 {
  id: 6,
  image: Image06,
  title: 'Team Profile Generator',
  github: 'https://github.com/eSTee3/Team-Profile-Generator',
  demo:'https://www.youtube.com/watch?v=PD2yKSoZDUI'
},
{
  id: 7,
  image: Image07,
  title: 'Leash Application',
  github: 'https://github.com/eSTee3/Leash',
  demo: 'https://team01-leash.herokuapp.com/'
},
]
const Project = () => {
  return (
    <section id="project">
      <h5>My Project Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            GitHub Repo
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer">
            Site/Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Project;