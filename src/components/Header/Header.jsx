import React, { useState } from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";



const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : "0" };
    }
  };

  return (
    <section id="home" className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="brand logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu sticky flexCenter" style={getMenuStyles(menuOpened)}>
          <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
              Home
            </Link>
            <Link to="ourValue" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
              Our Value
            </Link>
            <Link to="contactUs" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
              Contact Us
            </Link>
            <Link to="getStarted" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
              Get Started
            </Link>
            <button className="button">
              <Link to="contactUs" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
                Contact
              </Link>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Menu icon for toggling mobile menu */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
