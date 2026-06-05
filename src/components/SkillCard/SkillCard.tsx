import { SkillCardProps } from "../../utils/ComponentTypes";
import "./SkillCard.css";

export default function SkillCard({ title, skillList }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h4 className="skill-card__title">{title}</h4>
      <ul className="skill-card__skill-list">
        {skillList.map((skill) => (
          <li className="skill-card__skill">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
