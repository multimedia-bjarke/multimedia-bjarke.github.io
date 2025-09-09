import HomeCards from "../components/HomeCards";
import BtnCTA from "../components/BtnCTA";

function HomePage() {
  return (
    <>
      <header id="header-homepage"></header>
      <main id="main-homepage">
        <section className="title-section">
          <h1>Bjarke Holm</h1>
          <h3>Multimediedesigner og frontendudvikler</h3>
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
