import { Link } from "react-router";

export default function BentoGridContent() {
  return (
    <div
      className="
        grid w-screen gap-6 text-xl h-screen
        px-14                                
        mt-20
        md:grid md:h-[80vh] md:w-screen md:grid-cols-2 md:grid-rows-6 md:gap-14 md:m-16 text-xl 
        lg:mx-32 lg:grid-cols-4 lg:grid-rows-4 lg:gap-14 lg:h-[80vh]
        xl:mx-32 xl:mt-20 xl:grid-rows-4 xl:h-[95vh]
        2xl:h-[80vh]
        w-full max-w-6xl px-4
      "
    >
      <Link
        to="/contentdetail/podcast"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>Podcast</h1>
      </Link>

      <Link
        to="/contentdetail/promo1"
        className="col-span-1 md:row-span-2 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ffd900]"
      >
        <h1>Promovideo - Højskole</h1>
      </Link>

      <Link
        to="/contentdetail/promo2"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff9100]"
      >
        <h1>Promovideo - Band</h1>
      </Link>

      <Link
        to="/contentdetail/motiongraphic"
        className="col-span-1 md:row-span-3 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff0000]"
      >
        <h1>Motion Graphic</h1>
      </Link>

      <Link
        to="/contentdetail/fotografi"
        className="col-span-1 md:row-span-2 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff0000]"
      >
        <h1>Fotografi</h1>
      </Link>

      <Link
        to="/contentdetail/reel1"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>IG reel</h1>
      </Link>

      <Link
        to="/contentdetail/musikproduktion"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ff5900]"
      >
        <h1>Musikproduktion</h1>
      </Link>

      <Link
        to="/contentdetail/kortfilm"
        className="col-span-1 md:row-span-1 rounded-xl bg-black flex items-center justify-center 
                   transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#ffd900]"
      >
        <h1>Kortfilm</h1>
      </Link>
    </div>
  );
}
