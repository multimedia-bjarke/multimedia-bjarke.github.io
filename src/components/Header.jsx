import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <img src="/img/icons/HomeIcon.svg" alt="Home" />
      </Link>
      <Link to="/menu">
        <img src="/img/icons/NavIcon.svg" alt="Navigation" />
      </Link>
    </header>
  );
}
