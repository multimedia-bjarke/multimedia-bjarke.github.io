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
                "Frontendudvikler",
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
