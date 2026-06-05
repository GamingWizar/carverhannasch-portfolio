import "./About.css";
import sorenimg from "../../assets/soren.jpg";

export default function About() {
  return (
    <div className="page__section">
      <div className="about page__section-content">
        <div className="about__section">
          <h3 className="about__title">About Me</h3>
          <p className="about__text about__text_first">
            I'm a Full Stack Software Engineer graduate from TripleTen with a
            love for learning new languages.
          </p>
          <p className="about__text">
            {
              " With the help of my assistant Soren (my pet Black Capped Conure) I enjoy building all parts of a website, from the front end, to the back end, and even deployment to cloud services."
            }
          </p>
        </div>
        <div className="about__section">
          <img src={sorenimg} className="about__img" />
          <p className="about__img-subtitle">Soren</p>
        </div>
      </div>
    </div>
  );
}
