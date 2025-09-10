import Header from "../components/Header";

export default function Design() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex justify-center align-bottom min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundDesign.svg')] bg-center bg-no-repeat ">
        <section className="flex ">
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Design
          </h1>
        </section>

        <section></section>
      </main>
      ;
    </>
  );
}
