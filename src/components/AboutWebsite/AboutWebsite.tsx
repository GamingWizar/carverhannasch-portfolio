import "./AboutWebsite.css";

export default function AboutWebsite() {
  return (
    <div className="page__section">
      <div className="page__section-content about-website">
        <div className="about-website__section">
          <h2 className="about-website__title">About this Website</h2>
          <p className="about-website__text">
            This portfolio was created by scratch using React and TypeScript,
            and is hosted with a custom domain using a Google Cloud Virtual
            Machine.
          </p>
        </div>
        <div className="about-website__section">
          <h3 className="about-website__subtitle">Technologies Used:</h3>
          <ul className="about-website__list">
            <li className="about-website__list-item">React</li>
            <li className="about-website__list-item">TypeScript</li>
            <li className="about-website__list-item">HTML</li>
            <li className="about-website__list-item">CSS</li>
            <li className="about-website__list-item">Vite</li>
            <li className="about-website__list-item">Nginx</li>
            <li className="about-website__list-item">Google Cloud VM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
