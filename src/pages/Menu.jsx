import { Link, NavLink } from "react-router";
import Header from "../components/Header";
import AnimatedText from "../components/AnimatedText";

export default function Menu() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="menu-section">
        <button id="circle-btn">
          <Link to="/design">
            <h1>Design</h1>
          </Link>
          <Link to="/frontend">
            <h1>Frontend udvikling</h1>
          </Link>

          <Link to="/content">
            <h1>Content Creation</h1>
          </Link>
        </button>
      </section>
    </>
  );
}
