import "./Contact.css";
import emailImg from "../../assets/email.png";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";

export default function Contact() {
  return (
    <div className="page__section">
      <div className="page__section-content contact">
        <h2 className="contact__title">Contact Me</h2>
        <div className="contact__link-section">
          <p className="contact__text contact__email">
            <img
              className="contact__link-img"
              src={emailImg}
              alt="email icon"
            />
            carverhannasch@gmail.com
          </p>
          <a
            className="contact__link contact__linkedin"
            href="https://www.linkedin.com/in/carver-hannasch/"
            target="_blank"
          >
            <img
              className="contact__link-img"
              src={linkedinImg}
              alt="email icon"
            />
            https://www.linkedin.com/in/carver-hannasch/
          </a>
          <a
            className="contact__link contact__github"
            href="https://github.com/GamingWizar"
            target="_blank"
          >
            <img
              className="contact__link-img"
              src={githubImg}
              alt="email icon"
            />
            https://github.com/GamingWizar
          </a>
        </div>
      </div>
    </div>
  );
}
