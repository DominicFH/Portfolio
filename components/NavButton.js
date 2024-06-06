import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({ pageName, pathName }) {
  const currentPath = usePathname();
  const activeClassName = currentPath === pathName ? "tab-active" : "flex-1 tab";
  return (
    <li>
      <Link role="tab" className={`mx-2 flex-1 tab ${activeClassName}`} href={pathName}>
        {pageName}
      </Link>
    </li>
  );
}
