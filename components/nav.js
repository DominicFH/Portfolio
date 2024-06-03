import Link from "next/link";
import NavButton from "./NavButton.js";

export default function Nav() {
  const pages = [
    {
      pageName: "About Me",
      pathName: "/",
    },
    {
      pageName: "Career History",
      pathName: "/career",
    },
    {
      pageName: "My Projects",
      pathName: "/projects",
    },
    {
      pageName: "Get In Touch",
      pathName: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          dominic-harris.dev
        </Link>
      </div>
      <div className="navbar-end">
        <div className="tabs tabs-boxed">
          <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
            {pages.map((page) => {
              return (
                <NavButton
                  key={page.pageName}
                  pageName={page.pageName}
                  pathName={page.pathName}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
