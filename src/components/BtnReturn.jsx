import { useNavigate } from "react-router";

export default function BtnReturn() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about#contact-section");
  }

  return (
    <>
      <div className="btn-cta">
        <button
          onClick={handleClick}
          className="
    w-[10rem] 
    h-[3.875rem] 
    flex 
    justify-center 
    items-center 
    flex-shrink-0 
    rounded-[1.5625rem]  /* exact 25px */
    border-2 
    border-none 
    bg-[#ff9100] 
    px-6 
    py-3 
    font-inter 
    font-semibold 
    gap-3
     
    text-white 
    text-[1.5rem] 
    leading-normal 
    shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] 
    transition-all 
    duration-300 
    hover:translate-x-[-4px] 
    hover:translate-y-[-4px] 
    hover:rounded-[1.5625rem] /* keep same radius on hover */
    hover:shadow-[4px_4px_0px_black] 
    active:translate-x-[0px] 
    active:translate-y-[0px] 
    active:rounded-[1.5625rem] 
    active:shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)]
    outline-none
  "
        >
          Tilbage {""}
          <img src="/img/icons/IconReturn.svg" alt="" />
        </button>
      </div>

      <button></button>
    </>
  );
}
