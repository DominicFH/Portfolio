import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          dominic-harris.dev
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
          <li>
            <Link href={"/"}>About Me</Link>
          </li>
          <li>
            <Link href={"/career"}>Career History</Link>
          </li>
          <li>
            <Link href={"/projects"}>My Projects</Link>
          </li>
          <li>
            <Link href={"/contact"}>Get In Touch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
