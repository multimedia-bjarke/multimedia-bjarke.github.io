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

function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col w-screen h-screen bg-[url('/img/backgrounds/Baggrund2.svg')] bg-cover bg-bottom bg-blend-color-burn mb-20">
        <section className="flex flex-col items-center mb-40 mt-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            Bjarke Holm
          </h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-full h-full mb-12">
          <HomeCards />
        </div>

        <div className="flex justify-center">
          <BtnCTA />
        </div>
      </main>
      ;
    </>
  );
}

export default HomePage;
