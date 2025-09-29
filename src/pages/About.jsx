import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
    });
  }, []);

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
        <section className="flex flex-col w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            CV
          </h1>

          {/* AK card */}
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between lg:justify-around gap-8">
            <div
              data-aos="fade-right"
              className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5"
            >
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
          <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-between gap-8 lg:justify-around">
            <div
              data-aos="fade-left"
              className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-l-2xl shadow-md flex flex-col justify-center text-white p-5"
            >
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
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-8 lg:justify-around">
            <div
              data-aos="fade-right"
              className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl md:rounded-r-2xl shadow-md flex flex-col justify-center text-white p-5"
            >
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

        {/*Section - CV */}
        <section className="flex flex-col items-center w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Erfaring
          </h1>

          {/* SK card */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex justify-center w-full"
          >
            <div className="w-full max-w-[40rem] h-auto md:h-[32rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
              <h2 className="text-3xl md:text-4xl text-center">
                Skovgaard & Damgaard
              </h2>
              <div className="flex flex-col items-center mt-8 md:mt-12 text-xl md:text-2xl gap-4 text-center">
                <p>2024 -</p>
                <p>Digitalt bureau</p>
                <p>Multimediedesigner (studiejob)</p>
                <p>Wordpress, Adobe Suite, Final Cut Pro, Motion</p>
              </div>
            </div>
          </div>
        </section>

        {/*Section - personligt */}
        <section className="flex flex-col items-center w-screen gap-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-20">
            Personligt
          </h1>

          {/* Card top */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex justify-center w-full"
          >
            <div className="w-full max-w-[55rem] h-[18rem] bg-[#ff9100] rounded-2xl shadow-md flex flex-col justify-center text-white p-5 mb-10">
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
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex justify-center w-full"
          >
            <div className="w-full max-w-[55rem] h-[18rem] bg-black rounded-2xl shadow-md flex flex-col justify-center text-white p-5">
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

        {/* Section - Hvad kan jeg tilbyde */}
        <section className="flex flex-col w-full gap-12 sm:gap-14 md:gap-16 px-4 mb-16 sm:mb-20 mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-10 md:mb-20">
            Hvad kan jeg tilbyde?
          </h1>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 place-items-center">
            {/* Digital Design */}
            <div className="text-center max-w-md">
              <h2 className="text-[#ff9100] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Digital Design
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5">
                Branding, Visuel identitet, Moodboards, Logoer, Mockups,
                Prototyper, InDesign, Illustrator, Photoshop og Figma
              </p>
            </div>

            {/* Content Creation */}
            <div className="text-center max-w-md">
              <h2 className="text-[#ff9100] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Content Creation
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5">
                SoMe, Reels, Opslag, Annoncer, Bannere, Podcast, Lyddesign,
                YouTube, Video, foto og Reklamer
              </p>
            </div>

            {/* Frontend-udvikling */}
            <div className="text-center max-w-md">
              <h2 className="text-[#ff9100] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Frontend-udvikling
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5">
                Interaktiv og relevant webudvikling med HTML, CSS, JS, WordPress
                og React
              </p>
            </div>
          </div>
        </section>

        {/*Section - CTA */}
        <section
          id="contact-section"
          className="flex flex-col items-center w-full gap-12 sm:gap-14 md:gap-16 px-4 mb-16 sm:mb-20 mt-0 md:mt-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-20 mb-0">
            Giv mig et kald!
          </h1>

          {/* Phone */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <img
              className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-10"
              src="/img/icons/Phone.svg"
              alt="Phone"
            />
            <a
              href="tel:+4593946104"
              className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-[#ff9100] transition-colors"
            >
              93 94 61 04
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <img
              className="w-7 sm:w-9 md:w-11 lg:w-12 xl:w-10"
              src="/img/icons/Email.svg"
              alt="Email"
            />
            <a
              href="mailto:bjarkedtholm@gmail.com"
              className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-[#ff9100] transition-colors break-all"
            >
              bjarkedtholm@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            <a
              className="transition-transform duration-200 hover:scale-125"
              href="https://www.instagram.com/bjarkeholm.media/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 sm:w-10 md:w-12 lg:w-14 "
                src="/img/icons/IG-icon.svg"
                alt="Instagram"
              />
            </a>

            <a
              className="transition-transform duration-200 hover:scale-125"
              href="https://www.linkedin.com/in/bjarke-holm-7409051a2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 sm:w-10 md:w-12 lg:w-14"
                src="/img/icons/LinkedIn-icon.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <h2 className="text-black italic font-light text-xl md:text-3xl">
            Jeg glæder mig til at høre fra jer!
          </h2>
        </section>
      </main>
    </>
  );
}
