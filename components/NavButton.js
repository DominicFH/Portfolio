import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ pageName, pathName }) {
  const currentPath = usePathname();
  const className =
    currentPath === pathName ? "flex-1 tab tab-active" : "flex-1 tab";
  return (
    <li>
      <Link role="tab" className={className} href={pathName}>
        {pageName}
      </Link>
    </li>
  );
}
