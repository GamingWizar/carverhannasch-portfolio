import "./Hero.css";
import carverimg from "../../assets/carver.png";

export default function Hero() {
  return (
    <div className="hero page__section">
      <div className="hero__section hero__section_align_left">
        <h2 className="hero__header">Carver Hannasch</h2>
        <h3 className="hero__subtitle">Full Stack Software Engineer</h3>
        <p className="hero__about">
          Creating optimized and user friendly web applications with expertise
          in HTML, JavaScript, and React.
        </p>
        <div className="hero__button-wrapper">
          <button className="hero__button">Projects</button>
          <button className="hero__button">Resume</button>
          <button className="hero__button">GitHub</button>
          <button className="hero__button">Linkedin</button>
        </div>
      </div>
      <div className="hero__section">
        <img src={carverimg} className="hero__img" />
      </div>
    </div>
  );
}
