import ExperienceItem from "./ExperienceItem";
import MiddleArrowImage from "./MiddleArrowImage";

export default function ExperienceTimeline({ experiences, initialDirectionLeft }) {
  const directions = ["left", "right"];
  if (!initialDirectionLeft) {
    directions.reverse();
  }
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <MiddleArrowImage direction="down" />
        <hr />
      </li>
      {experiences.map((experience, index) => {
        const isOddExperience = index % 2;
        return (
          <ExperienceItem
            direction={!isOddExperience ? directions[0] : directions[1]}
            date={experience.date}
            title={experience.title}
            description={experience.description}
          />
        );
      })}
      <li>
        <hr />
        <MiddleArrowImage direction="down" />
        <hr />
      </li>
    </ul>
  );
}
