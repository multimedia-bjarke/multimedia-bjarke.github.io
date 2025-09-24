import Header from "../components/Header";

export default function About() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center min-h-screen w-screen bg-[url('/img/backgrounds/BaggrundOm.svg')] bg-cover bg-left bg-blend-color-burn">
        {/* Hvem er jeg */}
        <section className="flex flex-col items-center w-screen px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Hvem er jeg?
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-40">
            <div className="flex justify-center">
              <img
                src="/img/bjarke_bw_fritlagt.svg"
                alt=""
                className="max-w-[20rem] md:max-w-[24rem]"
              />
            </div>

            {/*Tile container*/}
            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
              <div>
                <h2 className="text-3xl md:text-4xl text-center ">
                  Kort og godt
                </h2>
                <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-2">
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
        <section className="flex flex-col items-center w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            CV
          </h1>

          {/* AK card */}
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-8">
            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5">
              <h2 className="text-3xl md:text-4xl text-center">
                AK multimediedesign 2026
              </h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-4 text-center">
                <p>Aarhus Erhvervsakademi</p>
                <p>Multimediedesign</p>
                <p>Specialisering: Frontend development</p>
              </div>
            </div>

            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] flex items-center justify-center p-5">
              <img src="/img/icons/iconMMD.svg" alt="" className="max-h-40" />
            </div>
          </div>

          {/* BA card */}
          <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-between gap-8">
            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-l-2xl shadow-md flex flex-col justify-center text-white p-5">
              <h2 className="text-3xl md:text-4xl text-center">
                BA of Arts 2024
              </h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-4 text-center">
                <p>Aarhus Universitet</p>
                <p>Musikvidenskab (hovedfag)</p>
                <p>Film og medievidenskab (tilvalgsfag)</p>
              </div>
            </div>

            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] flex items-center justify-center p-5">
              <img src="/img/icons/iconUni.svg" alt="" className="max-h-40" />
            </div>
          </div>

          {/* STX card */}
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-8">
            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5">
              <h2 className="text-3xl md:text-4xl text-center ">
                Student - 2017
              </h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-4 text-center">
                <p>STX</p>
                <p>Det Kristne Gymnasium</p>
                <p>Engelsk A</p>
                <p>Musik A</p>
                <p>Tysk B</p>
              </div>
            </div>

            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] flex items-center justify-center p-5">
              <img
                src="/img/icons/iconStudent.svg"
                alt=""
                className="max-h-40"
              />
            </div>
          </div>
        </section>

        {/*Section - personligt */}
        <section className="flex flex-col items-center w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Personligt
          </h1>

          {/* Card top */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[55rem] bg-[#ff9100] rounded-2xl shadow-md flex flex-col justify-center text-white p-5 mb-10">
              <h2 className="text-3xl md:text-4xl text-center">Karaktertræk</h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-6 text-center">
                <p className="w-full md:w-[60%] text-justify tracking-tight">
                  “Jeg er en <strong>rolig</strong>,{" "}
                  <strong>ansvarsbevidst</strong> og{" "}
                  <strong>initiativrig teamplayer</strong>, der er nede på
                  jorden, kærlig og hyggelig.”
                </p>
              </div>
            </div>
          </div>

          {/* Card bottom */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[55rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
              <h2 className="text-3xl md:text-4xl text-center">Interesser</h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-6 text-center">
                <p className="w-full md:w-[80%] text-justify tracking-tight">
                  “I min fritid elsker jeg at bruge tid på{" "}
                  <strong>sangskrivning</strong> og{" "}
                  <strong>musikproduktion</strong>, samt{" "}
                  <strong>AV-produktion</strong>. Når jeg ikke gør det{" "}
                  <strong>løber</strong> jeg fra genbrug til genbrug og svinger
                  grydeskeen i køkkenet derhjemme.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Section - Hvad kan jeg tilbyde */}
        {/* <section className="flex flex-col items-center w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Hvad kan jeg tilbyde?
          </h1>
        </section> */}

        {/*Section - CTA */}
        <section
          id="contact-section"
          className="flex flex-col items-center w-screen gap-16 px-4 mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20">
            Giv mig et kald!
          </h1>

          <div className="flex">
            <img
              className="
            size-[15%] mr-4"
              src="/img/icons/Phone.svg"
              alt=""
            />
            <h2 className="text-black sm:text-xl md:text-xl lg:text-3xl">
              93 94 61 04
            </h2>
          </div>

          <div className="flex">
            <img
              className="
            size-[10%] mr-4"
              src="/img/icons/Email.svg"
              alt=""
            />
            <h2 className="text-black sm:text-xl md:text-xl lg:text-3xl">
              bjarkedtholm@gmail.com
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
