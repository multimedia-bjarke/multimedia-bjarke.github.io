import HomeCards from "../components/HomeCards";

function HomePage() {
  return (
    <>
      <main>
        <div className="cardContainer">
          <a href="/src/pages/Design.jsx">
            <HomeCards />
          </a>

          <a href="/src/pages/Design.jsx">
            <HomeCards />
          </a>

          <a href="/src/pages/Design.jsx">
            <HomeCards />
          </a>
        </div>
      </main>
    </>
  );
}

export default HomePage;
