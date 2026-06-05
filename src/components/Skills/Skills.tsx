import "./Skills.css";

import SkillCard from "../SkillCard/SkillCard";

export default function Skills() {
  return (
    <div className="page__section">
      <div className="skills page__section-content">
        <h2 className="skills__title">My Skills</h2>
        <div className="skills__skill-cards">
          <SkillCard
            title="Front End"
            skillList={["JavaScript", "TypeScript", "React", "HTML", "CSS"]}
          />
          <SkillCard
            title="Back End"
            skillList={["NodeJS", "ExpressJS", "MongoDB", "Mongoose"]}
          />

          <SkillCard
            title="Tools"
            skillList={["Git", "GitHub", "Google Cloud", "NginX"]}
          />
        </div>
      </div>
    </div>
  );
}
