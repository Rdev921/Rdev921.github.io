import "./skills.css";
import TechStack from "./TechStack";
import data from "../../db.json";

function Skills () {
  return (
    <div className="skills-main" id="skills">
      <div className="skillsWrapper">
        <div>
          <h1 className="skills-heading">Languages & Frameworks</h1>
          <div className="skillsTechnologiesDiv">
            {data.skills?.map((elm) => (
              <TechStack key={elm.id} {...elm} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="skills-heading">Tools</h1>
          <div className="skillsToolsDiv">
            {data.tools?.map((elm) => (
              <TechStack key={elm.id} {...elm} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;