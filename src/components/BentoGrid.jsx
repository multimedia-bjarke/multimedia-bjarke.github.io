import { Link } from "react-router";

export default function BentoGrid() {
  return (
    <div className="grid h-screen w-screen grid-cols-4 grid-rows-4 gap-3 xl:m-40 lg:m-32 md:m-16 text-xl">
      <Link
        to="/"
        className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]"
      >
        <h1>Reklame</h1>
      </Link>

      <Link className="col-span-1 row-span-2 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        {" "}
        <h1>Poster</h1>
      </Link>

      <Link className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        <h1>Google Ads</h1>
      </Link>
      <Link className="col-span-1 row-span-3 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        <h1>Koncert plakat</h1>
      </Link>

      <Link className="col-span-1 row-span-2 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        {" "}
        <h1>CVI</h1>
      </Link>

      <Link className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        <h1>Placeholder</h1>
      </Link>

      <Link className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        <h1>Placeholder</h1>
      </Link>

      <Link className="col-span-1 row-span-1 rounded-xl bg-black flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-[#ff9100]">
        <h1>Placeholder</h1>
      </Link>
    </div>
  );
}
