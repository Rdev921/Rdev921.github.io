// import "./projects.css";
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
                src={process.env.PUBLIC_URL + "./Images/homeelementry.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">1mg Clone</h1>
              <p className="project-description">
                Home Elementry is an Indian online marketplace that sells
                variety of furniture and home décor at a affordable price with
                top notch quality.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
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
                      `https://github.com/uzairansari11/eminent-tin-5074.git`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://eminent-tin-5074.vercel.app//`)
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
                src={process.env.PUBLIC_URL + "./Images/crocsland.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">CrocsLand</h1>
              <p className="project-description">
                CrocsLand is a E-commerce website that sells a wide range of
                footware products having unique and attrative design at very low
                prices.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
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
                      `https://github.com/uzairansari11/spicy-nerve-9354.git`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://crocsland.netlify.app/`)}
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
                src={process.env.PUBLIC_URL + "./Images/apnaEcart.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Apna-E-Cart</h1>
              <p className="project-description">
                Apna-E-Cart is an Indian consumer electronics retailer. It sells
                differnt kinds of electronic products and delivere the products
                within one day.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
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
                      `https://github.com/uzairansari11/-wanting-advertisement-5951.git`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://apnaestore.netlify.app/`)}
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
                src={process.env.PUBLIC_URL + "./Images/cultbody.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">CultBody</h1>
              <p className="project-description">
                CultBody provides product related to your fintness and also
                provide diffrent kind of fitness trianing via online and offline
                as per customer requirement.{" "}
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
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
                      `https://github.com/uzairansari11/-verdant-recess-5792.git`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() => openLink(`https://cultbody.netlify.app/`)}
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