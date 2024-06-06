import Link from "next/link";
import NavButton from "./NavButton.js";
import Image from "next/image.js";

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
      pageName: "My CV",
      pathName: "/pdf/Dominic-Harris-Developer-CV.pdf",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex-1">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image src={"/images/profile.jpg"} height={500} width={500} />
          </div>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl mx-2">
          dominic-harris.dev
        </Link>
      </div>
      <div className="navbar-end">
        <div className="tabs tabs-boxed">
          <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
            {pages.map((page) => {
              return <NavButton key={page.pageName} pageName={page.pageName} pathName={page.pathName} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
