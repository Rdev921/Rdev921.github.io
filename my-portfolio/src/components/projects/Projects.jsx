import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

function Projects() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="projects-projects" id="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={"https://user-images.githubusercontent.com/98752820/230619027-6e6090e1-1a45-4944-8004-e02d949dd97e.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Tackle And Trail</h1>
              <p className="project-description">
              Tackle & Trail is a clone of an e-commerce website Basspro which sells quality fishing, hunting, boating and outdoor sporting goods.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="Tackle And Trail"
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  {/* <p className="project-skills-card-name">JSON</p> */}
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Rdev921/auspicious-sea-8816`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://tackle-and-trail.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={"https://user-images.githubusercontent.com/61020616/230742102-a1ad5ef0-e734-425c-91a9-956816ba58cc.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">EXPRESS</h1>
              <p className="project-description">
              EXPRESS is an e-commerce website  which sells clothes, shoes and accessories for men, women and kids.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="express"
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  </div>
                   <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Rdev921/expert-iron-7655`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://aquamarine-tanuki-a219de.netlify.app/`)}
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={"https://user-images.githubusercontent.com/61020616/230742563-9783f805-dd60-4be7-9702-060fcd4df3df.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">1mg Clone</h1>
              <p className="project-description">
              INSTA-Pharma is a clone of an a healthcare platform 1mg, it provides services, including e-pharmacy, diagnostics, e-consultation and health content
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="1mg"
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Rdev921/incompetent-coil-1138`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://subtle-hamster-2b0f4a.netlify.app/`)}
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

       

        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={"https://user-images.githubusercontent.com/61020616/230743031-6741a609-1d89-4cbb-8b53-630d96bb4a44.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Orbitz</h1>
              <p className="project-description">
              It is a travel fare aggregator website and travel metasearch engine. The website is owned by Orbitz Worldwide, Inc.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="Orbitz"
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/Rdev921/eminent-kittens-5833`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://beautiful-dieffenbachia-d1d357.netlify.app/`)}
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;