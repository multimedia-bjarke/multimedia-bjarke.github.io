import Header from "../components/Header";
import BentoGridContent from "../components/BentoGridContent";
export default function Content() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col justify-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundContent.svg')] bg-fixed bg-center bg-no-repeat">
        <section className="flex justify-center">
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 ">
            Content Creation
          </h1>
        </section>

        <section className="flex justify-center font-bold m-0">
          <BentoGridContent />
        </section>
      </main>
      ;
    </>
  );
}
