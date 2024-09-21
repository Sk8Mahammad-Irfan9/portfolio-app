import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-bg">
        <div className="about-container">
          <div className="about-me-section">
            <div className="about-main-content">
              <h3 className="about-heading">Get to know me!</h3>
              <div className="about-details-section">
                <p className="about-details-paragraph">
                  I’m a recent BCA graduate with a strong foundation in
                  Full-Stack Web Development. My studies have equipped me with
                  skills in both front-end and back-end technologies. I’ve built
                  and managed web applications through various academic
                  projects.
                </p>
                <p className="about-details-paragraph">
                  These projects include interactive websites and functional web
                  applications. They’ve given me hands-on experience in creating
                  responsive interfaces and server-side functionality. Although
                  I lack industrial experience, I’m eager to apply my knowledge
                  to real-world challenges.
                </p>
                <p className="about-details-paragraph">
                  I’m excited to start my professional journey and am actively
                  seeking opportunities to grow as a developer. If you have a
                  role that fits my skills and enthusiasm, I’d love to discuss
                  how I can contribute to your team. Please check out my
                  projects and feel free to contact me!
                </p>
              </div>
            </div>
            <div className="about-skills-section">
              <h3 className="skills-heading">My Skills</h3>
              <div className="skills-container">
                <div className="skill-item">HTML</div>
                <div className="skill-item">CSS</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Node</div>
                <div className="skill-item">MongoDB</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">GitHub</div>
                <div className="skill-item">Responsive Design</div>
              </div>
              <div className="resume-section">
                <h2 className="resume-heading">My Resume</h2>
                <a
                  className="resume-link"
                  href="/assets/Sk_Mahammad_Irfan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
