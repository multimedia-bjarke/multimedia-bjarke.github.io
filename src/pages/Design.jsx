import Header from "../components/Header";
import BentoGrid from "../components/BentoGrid";

export default function Design() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col justify-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundDesign.svg')] bg-fixed bg-center bg-no-repeat">
        <section className="flex justify-center">
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Design
          </h1>
        </section>

        <section className="flex justify-center font-bold m-0">
          <BentoGrid />
        </section>
      </main>
      ;
    </>
  );
}
