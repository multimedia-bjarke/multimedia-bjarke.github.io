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

export default HomePage;

/*With Tailwind CSS*/

/* function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main
        id="main-homepage"
        className="flex flex-col items-center justify-start w-full min-h-screen bg-white px-4 sm:px-6 lg:px-16 py-8"
      >
        <section className="title-section text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bjarke Holm
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700">
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

        <div className="cardContainer w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <HomeCards />
        </div>

        <div className="w-full flex justify-center">
          <BtnCTA />
        </div>
      </main>
    </>
  );
}

export default HomePage; */
