export default function BtnCTA() {
  return (
    <a
      href="/about#contact-section"
      className="w-[16.4375rem] h-[3.875rem] flex justify-center items-center 
                 rounded-[1.5625rem] bg-[#ff9100] px-6 py-3 
                 font-inter font-semibold text-white text-[1.5rem] 
                 shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] 
                 transition-all duration-300 
                 hover:translate-x-[-4px] hover:translate-y-[-4px] 
                 hover:shadow-[4px_4px_0px_black] 
                 active:translate-x-[0px] active:translate-y-[0px] 
                 active:shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)]
                 outline-none"
    >
      Kontakt mig!
    </a>
  );
}
