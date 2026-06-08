import "./Contact.css";
import emailImg from "../../assets/email.png";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";
import pdfImg from "../../assets/pdf.png";
import resume from "../../docs/resume.pdf";

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
              alt="linkedin logo"
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
              alt="github logo"
            />
            https://github.com/GamingWizar
          </a>
          <a
            className="contact__link contact__resume"
            href={resume}
            download="Carver Hannasch Resume"
          >
            <img className="contact__link-img" src={pdfImg} alt="pdf icon" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
