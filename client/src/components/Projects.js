import React from "react";
import "../styles/projects.css";
import img1 from "../assets/Screenshot 2024-08-27 201758.png";
import img2 from "../assets/Screenshot 2024-08-27 202011.png";
import img3 from "../assets/Screenshot 2024-08-27 202102.png";
import img4 from "../assets/Screenshot 2024-08-27 202153.png";
import img5 from "../assets/Screenshot 2024-09-19 194614.png";

const Projects = () => {
  return (
    <div className="all-projects" id="work">
      <h2>This are all projects</h2>
      <div className="project-img">
        <ul>
          <li>
            <a
              href="https://ecommerce-app-green-mu.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} alt="img" loading="lazy" />
            </a>
            <div className="project-details">
              <h3>E Commerce</h3>
              <p>
                I’ve developed an e-commerce website using the MERN stack,
                featuring a user-friendly layout that includes dynamic product
                showcases, secure payment processing, and personalized shopping
                recommendations. The responsive design ensures a seamless
                experience across both desktop and mobile devices.
              </p>
              <div className="used-tool">
                <div>React</div>
                <div>Css</div>
                <div>Mui</div>
                <div>AntD</div>
              </div>
              <div className="go-live">
                <a
                  href="https://ecommerce-app-green-mu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="https://gym-frontend-97jv.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img3} alt="img" loading="lazy" />
            </a>
            <div className="project-details">
              <h3>Gym website</h3>
              <p>
                I’ve designed a user-friendly gym website UI featuring intuitive
                navigation, interactive class schedules, and a personalized
                member portal. The responsive design ensures a seamless
                experience on both desktop and mobile devices.
              </p>
              <div className="used-tool">
                <div>React</div>
                <div>Mui</div>
                <div>TailwindCss</div>
              </div>
              <div className="go-live">
                <a
                  href="https://gym-frontend-97jv.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="https://food-app-two-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt="img" loading="lazy" />
            </a>
            <div className="project-details">
              <h3>Ristora</h3>
              <p>
                I developed a restaurant app using the MERN stack that allows
                users to place orders directly from their favorite restaurants.
                The app provides a smooth ordering experience and generates an
                order number for easy tracking. With a user-friendly interface
                and responsive design, it’s optimized for both desktop and
                mobile devices.
              </p>
              <div className="used-tool">
                <div>React</div>
                <div>Css</div>
                <div>AntD</div>
              </div>
              <div className="go-live">
                <a
                  href="https://food-app-two-gamma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </li>

          <li>
            <a
              href="https://travel-with-us-e1xl.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} alt="img" loading="lazy" />
            </a>

            <div className="project-details">
              <h3>Travel Site</h3>
              <p>
                I’ve designed a travel webpage UI with an intuitive layout that
                features dynamic destination highlights, interactive booking
                tools, and personalized trip planning. The responsive design
                guarantees an optimal experience across both desktop and mobile
                devices.
              </p>
              <div className="used-tool">
                <div>React</div>
                <div>AntD</div>
                <div>TailwindCss</div>
              </div>
              <div className="go-live">
                <a
                  href="https://travel-with-us-e1xl.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="https://blog-app-ui-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img5} alt="img" loading="lazy" />
            </a>

            <div className="project-details">
              <h3>Blog App</h3>
              <p>
                I developed a blog app using the MERN stack that allows all
                users to read blog posts from registered users. However, only
                logged-in users have the ability to write their own posts. The
                app focuses solely on providing a seamless reading experience,
                with a clean and user-friendly interface. It is fully responsive
                and optimized for both desktop and mobile devices, ensuring that
                users can easily enjoy the content anytime, anywhere.
              </p>
              <div className="used-tool">
                <div>React</div>
                <div>Css</div>
                <div>Mui</div>
              </div>
              <div className="go-live">
                <a
                  href="https://blog-app-ui-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
