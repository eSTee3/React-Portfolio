import React from "react";
import "./about.css";
import myAvatar from "../../assets/My Avatar.png";
import { FaAward, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello My Name Is</h5>
        <h2>Mark Battaglia</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={myAvatar} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Work Experience</h5>
              <small>25+ Years in IT</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>All of my Projects</h5>
              <small>
                <a href="https://github.com/eSTee3?tab=repositories">25+ Projects</a>
                </small>
            </article>
          </div>
          <p>I'm a Sr. Reliability Engineer with over 25 years of IT experience within the retail space
            <br />
            <br />
            I've supported many different systems and software over the years, with a passion for ensuring stability and reliability is built into everything I work with or am in contact with.
            <br />
            <br />
            When I'm not working, I enjoy racing simulation in my triple-screen and VR-enabled sim racing cockpit
          </p>
          <a href="#project" className="btn btn-primary"> Browse a few of my Projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
