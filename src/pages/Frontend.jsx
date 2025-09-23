import Header from "../components/Header";
import BentoGridContent from "../components/BentoGridContent";
import BentoGridFrontend from "../components/BentoGridFrontend";

export default function Frontend() {
  return (
    <>
      {" "}
      <header>
        <Header />
      </header>
      <main className="flex flex-col justify-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundFrontend.svg')] bg-cover bg-center bg-no-repeat">
        <section className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mt-20 ">
              Frontend
            </h1>
            <h2 className="italic font-medium mt-10">
              Jeg har erfaring med følgende værktøjer
            </h2>
          </div>
        </section>

        <section className="flex justify-center font-bold m-0">
          <BentoGridFrontend />
        </section>
      </main>
      ;
    </>
  );
}
