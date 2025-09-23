/* import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <img src="img/icons/HomeIcon_50px.svg" alt="Home" />
      </Link>
      <Link to="/menu">
        <img src="/img/icons/MenuIcon_50px.svg" alt="Navigation" />
      </Link>
    </header>
  );
}
 */

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isMenuPage = location.pathname === "/menu";

  const handleMenuClick = () => {
    if (isMenuPage) {
      navigate(-1);
    }
  };

  return (
    <header className="flex justify-between items-center fixed w-screen h-[10vh] text-white p-4">
      <div className="transition-transform duration-50 ease-in-out hover:scale-105 hover:bg-[#ffff;] hover:rounded-full p-3 hover:cursor-pointer">
        <Link to="/">
          <img
            src="/img/buttons/HomeButton.svg"
            alt="Home"
            className="w-12 h-12"
          />
        </Link>
      </div>

      <button
        onClick={handleMenuClick}
        className="p-2 hover:scale-110 transition-transform"
      >
        {isMenuPage ? (
          <img
            src="/img/icons/EscapeIcon.svg"
            alt="Close Menu"
            className="w-12 h-12"
          />
        ) : (
          <div className="transition-transform duration-50 ease-in-out hover:scale-105 hover:bg-[#ff9100;] hover:rounded-full p-2 hover:cursor-pointer">
            <Link to="/menu">
              <img
                src="/img/icons/burger-menu-icon.svg"
                alt="Open Menu"
                className="w-12 h-12"
              />
            </Link>
          </div>
        )}
      </button>
    </header>
  );
}
