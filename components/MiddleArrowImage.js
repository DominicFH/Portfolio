import Image from "next/image";

export default function MiddleArrowImage({ direction }) {
  return (
    <div className="timeline-middle">
      <Image src={`/images/circle-arrow-${direction}.png`} height={18} width={18} />
    </div>
  );
}
