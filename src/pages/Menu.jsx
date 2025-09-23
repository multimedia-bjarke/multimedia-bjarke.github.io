/* import { Link, NavLink } from "react-router";
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
 */

import { Link } from "react-router";
import Header from "../components/Header";

export default function Menu() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="w-screen h-screen bg-[url('/img/backgrounds/BaggrundMenuUdenCirkel.svg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <button className="w-[80vw] max-w-[40rem] aspect-square bg-black text-white rounded-full flex flex-col items-center justify-center gap-4 lg:gap-12 md:gap-12">
          <Link to="/design">
            <h1 className="text-[8vw] lg:text-5xl md:text-5xl font-bold text-center transition-transform duration-200 hover:scale-105 hover:text-[#ff9100]">
              Design
            </h1>
          </Link>
          <Link to="/frontend">
            <h1 className="text-[8vw] lg:text-5xl md:text-5xl  font-bold text-center transition-transform duration-200 hover:scale-105 hover:text-[#ff9100]">
              Frontend-udvikling
            </h1>
          </Link>
          <Link to="/content">
            <h1 className="text-[8vw] lg:text-5xl md:text-5xl font-bold text-center transition-transform duration-200 hover:scale-105 hover:text-[#ff9100]">
              Content Creation
            </h1>
          </Link>
          <Link to="/about">
            <h1 className="text-[8vw] lg:text-5xl md:text-5xl font-bold text-center transition-transform duration-200 hover:scale-105 hover:text-[#ff9100]">
              Om mig
            </h1>
          </Link>
        </button>
      </section>
    </>
  );
}

/* w-[80vw] max-w-[40rem] aspect-square bg-black text-white rounded-full flex flex-col items-center justify-center gap-4 */
