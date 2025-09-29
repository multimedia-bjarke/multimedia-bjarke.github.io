import { Link } from "react-router";

export default function BentoGrid() {
  return (
    <div
      className="
        grid w-screen gap-6 text-xl h-screen
        px-14                                
        mt-20
        md:grid md:h-screen md:w-screen md:grid-cols-2 md:grid-rows-6 md:gap-14 md:m-16 text-xl
        lg:mx-32 lg:grid-cols-4 lg:grid-rows-4 lg:gap-14 lg:h-[80vh]
        xl:mx-32 xl:mt-20 xl:grid-rows-4 xl:h-[95vh]
        2xl:h-[80vh]
        w-full max-w-6xl px-4
      "
    >
      <Link
        to="/designdetail/reklame"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>Reklame</h1>
      </Link>

      <Link
        to="/designdetail/poster"
        className="col-span-1 md:row-span-2 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ffd900]"
      >
        <h1>Poster</h1>
      </Link>

      <Link
        to="/designdetail/google-ads"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff9100]"
      >
        <h1>Google Ads</h1>
      </Link>

      <Link
        to="/designdetail/fb-banner3"
        className="col-span-1 md:row-span-3 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff0000]"
      >
        <h1>FB-banner 3</h1>
      </Link>

      <Link
        to="/designdetail/website"
        className="col-span-1 md:row-span-2 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff0000]"
      >
        <h1>Website</h1>
      </Link>

      <Link
        to="/designdetail/fb-banner1"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>FB-banner 1</h1>
      </Link>

      <Link
        to="/designdetail/fb-banner2"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>FB-banner 2</h1>
      </Link>

      <Link
        to="/designdetail/persona"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ffd900]"
      >
        <h1>Persona</h1>
      </Link>
    </div>
  );
}
