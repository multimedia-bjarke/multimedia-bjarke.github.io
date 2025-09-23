/* import HomeCards from "../components/HomeCards";
import BtnCTA from "../components/BtnCTA";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main id="main-homepage">
        <section className="title-section">
          <h1>Bjarke Holm</h1>
          <h3>
            <AnimatedText
              initialText=""
              animatedTextArray={[
                "Multimediedesigner",
                "Frontend-udvikler",
                "Content Creator",
                "Webudvikler",
              ]}
            />
          </h3>
        </section>
        <div className="cardContainer">
          <HomeCards />
        </div>
        <div>
          <BtnCTA />
        </div>
      </main>
    </>
  );
}

export default HomePage; */

/*With Tailwind CSS*/

import HomeCards from "../components/HomeCards";
import BtnCTA from "../components/BtnCTA";
import AnimatedText from "../components/AnimatedText";
import Header from "../components/Header";
import { Link } from "react-router";
import MusicPlayer from "../components/MusicPlayer";

function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col min-h-screen w-screen bg-[url('/img/backgrounds/Baggrund2.svg')] bg-cover bg-bottom bg-blend-color-burn">
        <section className="flex flex-col items-center  mt-12">
          <Link to="/about">
            <h1 className=" text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mt-10 lg:mt-0 md:mt-0">
              Bjarke Holm
            </h1>
          </Link>

          <h3 className="italic text-xl md:text-2xl lg:text-3xl text-white mb-16">
            <AnimatedText
              initialText=""
              animatedTextArray={[
                "Multimediedesigner",
                "Frontend-udvikler",
                "Content Creator",
                "Webudvikler",
              ]}
            />
          </h3>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center min-w-[100%] xl:min-w-[100%] 2xl:min-w-[60%] place-self-center flex-grow">
          <HomeCards />
        </div>

        <div
          className="
        flex justify-center mt-6 mb-6 animate__animated animate__shakeY 
        md: md:mt-7 md:mb-12 "
        >
          <img src="/img/icons/ArrowIconOrange.svg" alt="orange pil" />
        </div>

        <div className="flex justify-center  mb-12">
          <div className="flex-col justify-items-center">
            <BtnCTA />
            <div
              className="flex w-[100%] opacity-100 mt-12 items-center
"
            >
              <MusicPlayer src="/audio/rnb.mp3" autoplay="true" />
              <p
                className="text-black ml-20 italic font-medium text-[#ff9100]
"
              >
                Hør lidt stemningsmusik imens du overvejer hvor du skal hen
              </p>
            </div>
          </div>
        </div>
      </main>
      ;
    </>
  );
}

export default HomePage;
