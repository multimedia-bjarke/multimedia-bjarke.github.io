import { Link } from "react-router";
import DeisgnDetail from "../pages/DesignDetail";

export default function BentoGrid() {
  return (
    <div className="grid h-screen w-screen grid-cols-4 grid-rows-4 gap-14 xl:m-40 lg:m-32 md:m-16 text-xl">
      <Link
        to="/designdetail/reklame"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ff5900]"
      >
        <h1>Reklame</h1>
      </Link>

      <Link
        to="/designdetail/poster"
        className="col-span-1 row-span-2 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ffd900]"
      >
        {" "}
        <h1>Poster</h1>
      </Link>

      <Link
        to="/designdetail/google-ads"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ff9100]"
      >
        <h1>Google Ads</h1>
      </Link>
      <Link
        to="/designdetail/koncertplakat"
        className="col-span-1 row-span-3 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ff0000]"
      >
        <h1>Event-plakat</h1>
      </Link>

      <Link
        to="/designdetail/cvi"
        className="col-span-1 row-span-2 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ff0000]"
      >
        {" "}
        <h1>CVI</h1>
      </Link>

      <Link
        to="/designdetail/placeholder-1"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ff5900]"
      >
        <h1>FB-banner</h1>
      </Link>

      <Link
        to="/designdetail/placeholder-2"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#d30440] hover:bg-[#ff5900]"
      >
        <h1>Placeholder</h1>
      </Link>

      <Link
        to="/designdetail/placeholder-3"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#fffff] hover:bg-[#ffd900]"
      >
        <h1>Placeholder</h1>
      </Link>
    </div>
  );
}
