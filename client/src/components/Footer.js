import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <ul className="social-media-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/profile.php?id=100049249787497&mibextid=ZbWKwL"
              className="social-link facebook"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Sk8Mahammad-Irfan9"
              className="social-link github"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/sk-mahammad-irfan"
              className="social-link linkedin"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>
          © {new Date().getFullYear()} Sk Mahammad Irfan. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
