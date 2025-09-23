import Header from "../components/Header";

export default function About() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundOm.svg')] bg-cover bg-left bg-blend-color-burn">
        <section className="flex flex-col items-center w-screen">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Hvem er jeg?
          </h1>

          <div className="flex flex-row items-center gap-40">
            <div>
              <img src="/img/bjarke_bw_fritlagt.svg" alt="" />
            </div>

            {/*Tile container*/}
            <div className="w-[40rem] h-[32rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-4xl">Kort og godt</h2>
                <div className="flex flex-col items-center mt-12 text-2xl">
                  <p>-27 år</p>
                  <p>-Bosat i Aarhus</p>
                  <p>-Oprindeligt fra Vestjylland</p>
                  <p>-Passioneret musiker og sangskriver</p>
                  <p>-Multimediedesigner</p>
                  <p>-Genbrugsjæger</p>
                  <p>-Løber</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Section - CV */}
        <section className="flex flex-col items-center w-screen gap-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            CV
          </h1>

          {/* AK card */}
          <div className="flex w-screen justify-between">
            {/*Tile container*/}
            <div className="self-start w-[40rem] h-[32rem] bg-black rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-4xl">AK multimediedesign 2026</h2>
                <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                  <p>Aarhus Erhvervsakademi</p>
                  <p>Multimediedesign</p>
                  <p>Specialisering: Frontend development</p>
                </div>
              </div>
            </div>

            {/*icon*/}
            <div className="self-start w-[40rem] h-[32rem] rounded-2xl flex flex-col justify-center text-white p-5">
              <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                <img src="/img/icons/iconMMD.svg" alt="" />
              </div>
            </div>
          </div>

          {/* BA card */}
          <div className="flex w-screen justify-between flex-row-reverse">
            {/* Card content */}
            <div className="self-end w-[40rem] h-[32rem] bg-black rounded-l-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-4xl">BA of Arts 2024</h2>
                <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                  <p>Aarhus Universitet</p>
                  <p>Musikvidenskab (hovedfag)</p>
                  <p>Film og medievidenskab (tilvalgsfag)</p>
                </div>
              </div>
            </div>

            {/* Icon */}
            <div className="self-end w-[40rem] h-[32rem] flex items-center justify-center p-5">
              <img src="/img/icons/iconUni.svg" alt="" />
            </div>
          </div>

          {/* STX card */}
          <div className="flex w-screen justify-between">
            {/* Card content */}
            <div className="self-end w-[40rem] h-[32rem] bg-black rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-4xl">BA of Arts 2024</h2>
                <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                  <p>STX</p>
                  <p>Det Kristne Gymnasium</p>
                  <p>Engelsk A</p>
                  <p>Musik A</p>
                  <p>Tysk B</p>
                </div>
              </div>
            </div>

            {/* Icon */}
            <div className="self-end w-[40rem] h-[32rem] flex items-center justify-center p-5">
              <img src="/img/icons/iconStudent.svg" alt="" />
            </div>
          </div>
        </section>

        {/*Section - personligt */}
        <section className="flex flex-col items-center w-screen gap-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Personligt
          </h1>

          {/* Card top */}
          <div className="flex w-screen justify-center">
            <div className="w-[55rem] h-[20rem] bg-[#ff9100] rounded-2xl shadow-md flex flex-col justify-center text-white p-5 mb-10">
              <div>
                <h2 className="text-4xl">Karaktertræk</h2>
                <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                  <p className="w-[60%] text-justify tracking-tight">
                    “Jeg er en <strong>rolig</strong>,{" "}
                    <strong>ansvarsbevidst</strong> og{" "}
                    <strong>initiativrig teamplayer</strong>, der er nede på
                    jorden, kærlig og hyggelig.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card bottom */}
          <div className="flex w-screen justify-center">
            <div className="w-[55rem] h-[20rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-4xl">Interesser</h2>
                <div className="flex flex-col items-center mt-12 text-2xl gap-6 text-center">
                  <p className="w-[80%] text-justify tracking-tight">
                    “I min fritid elsker jeg at bruge tid på{" "}
                    <strong>sangskrivning</strong> og{" "}
                    <strong>musikproduktion</strong>, samt{" "}
                    <strong>AV-produktion</strong>. Når jeg ikke gør det{" "}
                    <strong>løber</strong> jeg fra genbrug til genbrug og
                    svinger grydeskeen i køkkenet derhjemme.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Section - Hvad kan jeg tilbyde */}
        <section className="flex flex-col items-center w-screen gap-16">
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Hvad kan jeg tilbyde?
          </h1>
        </section>

        {/*Section - CTA */}
        <section
          id="contact-section"
          className="flex flex-col items-center w-screen gap-16"
        >
          <h1 className="flex text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Giv mig et kald!
          </h1>
        </section>
      </main>
    </>
  );
}
