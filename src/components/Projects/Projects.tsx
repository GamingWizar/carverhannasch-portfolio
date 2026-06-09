import "./Projects.css";
import wtwr from "../../assets/wtwr.png";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="page__section">
      <div className="page__section-content projects" id="projects">
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects__project-grid">
          <ProjectCard
            title="What to Wear"
            description="Dynamic website that uses a 3rd party API to gather weather data and reccomend clothing. Features both a front end and a back end containing clothing items that users can add to by making an account."
            img={wtwr}
            liveLink="https://wtwr.carverhannasch.com"
            gitHubLink="https://github.com/GamingWizar/se_project_react"
          ></ProjectCard>
          <ProjectCard
            title="News Explorer"
            description="What's the news"
            img
            liveLink=""
            gitHubLink=""
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}
