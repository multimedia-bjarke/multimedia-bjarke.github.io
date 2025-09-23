import { Link } from "react-router";

export default function BentoGridFrontend() {
  return (
    <div
      className="
        grid w-screen gap-6 text-xl h-screen
        px-14                                
        mt-20
        sm: grid sm:grid-cols-1
        md:grid md:h-screen md:w-screen md:grid-cols-3 md:grid-rows-6 md:gap-14 md:m-16 text-xl
        lg:mx-10 lg:grid-cols-6 lg:grid-rows-6 lg:gap-14
        xl:mx-32 xl:mt-20 xl:grid-rows-4
        w-full max-w-6xl px-4
      "
    >
      <Link
        to="/frontenddetail/html"
        className="col-start-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/HTML.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/promo1"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/CSS.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/promo2"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/JS.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/motiongraphic"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/REACT.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/fotografi"
        className="col-start-2 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/TW.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/reel1"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/WP.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/musikproduktion"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/VS.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/API.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-start-3 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/GIT.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/GoogleDEV.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/GitHub.svg" alt="" />
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center p-4
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#]"
      >
        <img src="/img/icons/FIGMA.svg" alt="" />
      </Link>
    </div>
  );
}
