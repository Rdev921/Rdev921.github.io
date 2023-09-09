import "./projects.css";
import Carousel from "./Carousel";
import data from "../../db.json";

function Projects() {
	return (
		<div className="projects-projects" id="projects">
			<h1 className="projects-heading"> Projects</h1>
			<div className="projects-container">
				<Carousel projects={data.projects} />
			</div>
		</div>
	);
}

export default Projects;



