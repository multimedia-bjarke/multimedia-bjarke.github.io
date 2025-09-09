import { useNavigate } from "react-router-dom";

export default function BtnCTA() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <button className="btn-cta" onClick={handleClick}>
      Kontakt mig!
    </button>
  );
}
