import "./Hero.css";
import carverimg from "../../assets/carver.png";
import resume from "../../docs/resume.pdf";

export default function Hero() {
  return (
    <div className="page__section">
      <div className="hero page__section-content">
        <div className="hero__section hero__section_align_left">
          <h2 className="hero__header">Carver Hannasch</h2>
          <h3 className="hero__subtitle">Full Stack Software Engineer</h3>
          <p className="hero__about">
            Creating optimized and user friendly web applications with expertise
            in HTML, JavaScript, and React.
          </p>
          <div className="hero__button-wrapper">
            <a className="hero__button" href="#projects">
              Projects
            </a>
            <a
              className="hero__button"
              href={resume}
              download="Carver Hannasch Resume"
            >
              Resume
            </a>
            <a
              className="hero__button"
              href="https://github.com/GamingWizar"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="hero__button"
              href="https://www.linkedin.com/in/carver-hannasch/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="hero__section">
          <img src={carverimg} className="hero__img" />
        </div>
      </div>
    </div>
  );
}
