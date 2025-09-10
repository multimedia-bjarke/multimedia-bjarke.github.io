import Header from "../components/Header";
import DesignCards from "../components/DesignCards";
import BentoGrid from "../components/BentoGrid";

export default function Design() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col justify-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundDesign.svg')] bg-center bg-no-repeat">
        <section className="flex justify-center">
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Design
          </h1>
        </section>

        <section
          className="flex justify-center"
          /* className="grid grid-cols-4 s:grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 w-full mt-20 place-self-center justify-items-center" */
        >
          {/* <DesignCards /> */}
          <BentoGrid />
        </section>
      </main>
      ;
    </>
  );
}
