import MiddleArrowImage from "./MiddleArrowImage";

export default function ExperienceItem({ direction, date, title, description }) {
  const timelineClass = direction === "left" ? "timeline-start" : "timeline-end";
  return (
    <li>
      <hr />
      <MiddleArrowImage direction={direction} />
      <div className={`${timelineClass} md:text-center mb-10`}>
        <time className="font-mono italic">{date}</time>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-400 bg-base-300">
          <h3 className="text-lg font-black collapse-title">{title}</h3>
          <p className="collapse-content">{description}</p>
        </div>
      </div>
      <hr />
    </li>
  );
}
