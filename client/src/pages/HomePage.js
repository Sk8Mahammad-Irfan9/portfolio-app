import React from "react";
import "../styles/homePage.css";
import Projects from "../components/Projects";
import About from "../components/About";
import ContactMe from "../components/ContactMe";

const HomePage = () => {
  return (
    <>
      <div className="container" id="about">
        <div>
          <div>
            <div className="welcome-section">
              <h1>HEY, I'M SK MAHAMMAD IRFAN</h1>
              <div className="info">
                <p>
                  Recent BCA graduate with a strong self-taught background in
                  full stack web development, dedicated to creating and managing
                  websites and web applications that drive product success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />

      <Projects />

      <ContactMe />
    </>
  );
};

export default HomePage;
