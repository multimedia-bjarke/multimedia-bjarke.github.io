import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Links">
      <NavLink
        to="/design"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Design
      </NavLink>

      <NavLink
        to="/frontend"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Frontend udvikling
      </NavLink>

      <NavLink
        to="/content"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Content Creation
      </NavLink>
    </nav>
  );
}
