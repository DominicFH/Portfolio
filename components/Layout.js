import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Nav />
      {children}
    </div>
  );
}
