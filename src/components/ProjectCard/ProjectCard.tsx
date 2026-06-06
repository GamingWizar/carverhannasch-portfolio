import "./ProjectCard.css";
import { ProjectCardProps } from "../../utils/ComponentTypes";

export default function ProjectCard({
  title,
  description,
  img,
  liveLink,
  gitHubLink,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <img className="project-card__img" src={img} alt="" />
      <div className="project-card__card-bottom">
        <p className="project-card__description">{description}</p>
        <div className="project-card__links">
          <a
            className="project-card__link-button"
            href={liveLink}
            target="_blank"
          >
            Live
          </a>
          <a
            className="project-card__link-button"
            href={gitHubLink}
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
