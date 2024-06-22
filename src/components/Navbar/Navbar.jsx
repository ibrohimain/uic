import "./Navbar.scss";
import "./Menu.scss";
import { useState, useEffect } from "react";
import BrandSvg from "./BrandSvg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [navChange, setNavChange] = useState(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  });

  useEffect(() => {
    if (openMenu) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <nav
      className="app__navbar"
      style={{
        backgroundColor: `${navChange ? "rgba(30,30,32,.95)" : "transparent"}`,
      }}
    >
      <div className="container">
        <div
          className="app__navbar-wrapper"
          style={{
            height: `${navChange ? "9rem" : "12rem"}`,
          }}
        >
          <div
            className="app__navbar-hamburger"
            onClick={() => setOpenMenu((prev) => !prev)}
            style={{
              backgroundColor: `${openMenu ? "" : "hsla(0, 0%, 100%, 0.16)"}`,
            }}
          >
            <span
              className={`hamburger-item ${openMenu ? "change-hamburger" : ""}`}
            ></span>
            <span
              className={`hamburger-item ${openMenu ? "change-hamburger" : ""}`}
            ></span>
            <span
              className={`hamburger-item ${openMenu ? "change-hamburger" : ""}`}
            ></span>
          </div>
          <div className="app__navbar-brand">
            <NavLink to="/">
              <BrandSvg />
            </NavLink>
          </div>
          <div
            className="app__navbar-links"
            style={{
              transform: `${hover ? "translateX(-23rem)" : "translateX(0)"}`,
              opacity: `${hover ? "0" : "1"}`,
            }}
          >
            <ul>
              <li>
                <Link
                  activeClass="activeLink"
                  to="/"

                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activeLink"
                  to="services"
                  spy={true}
                  offset={-90}
                  duration={800}
                >
                  Services
                </Link>
              </li>
              <li>
                <NavLink to="/portfolio">portfolio</NavLink>
              </li>
              <li>
                <Link
                  activeClass="activeLink"
                  to="vacansy"
                  spy={true}
                  offset={-90}
                  duration={800}
                >
                  cerier
                </Link>
              </li>
            </ul>
            <div>
              <a href="tel:+998 71 200 70 07" className="app__navbar-call">
                <span>+998 71</span> 200 70 07
              </a>
            </div>
          </div>
          <div>
            <div
              className={`app__navbar-languages ${hover ? 'langLarge' : ''}`}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="global-link">
                <svg
                  data-v-157fb9fc=""
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-157fb9fc=""
                    d="M10 0.25C4.624 0.25 0.25 4.624 0.25 10C0.25 15.376 4.624 19.75 10 19.75C15.376 19.75 19.75 15.376 19.75 10C19.75 4.624 15.376 0.25 10 0.25ZM10 1.75C10.2535 1.75 10.5025 1.76559 10.75 1.78809V2.5H12.25V2.06934C14.0935 2.59359 15.6745 3.74073 16.75 5.27148V7.75L17.5 9.25V10H18.25C18.25 10.2745 18.2352 10.5467 18.209 10.8145C18.2022 10.8865 18.1872 10.9556 18.1782 11.0269C18.1535 11.2241 18.1279 11.42 18.0889 11.6128C18.0746 11.6848 18.0556 11.7554 18.0391 11.8267C17.9956 12.0172 17.9488 12.2068 17.8926 12.3921C17.8731 12.4558 17.8506 12.5181 17.8296 12.5811C17.7666 12.7716 17.6995 12.9605 17.623 13.145C17.6005 13.199 17.576 13.2514 17.5527 13.3047C17.4687 13.4959 17.3807 13.6842 17.2832 13.8672C17.26 13.9114 17.2347 13.9548 17.21 13.9976C17.105 14.1866 16.9938 14.3698 16.8745 14.5498C16.8513 14.5851 16.8267 14.6215 16.8027 14.6567C16.6767 14.8405 16.5431 15.0189 16.4028 15.1914C16.3796 15.2199 16.3587 15.2472 16.3354 15.2749C16.1899 15.4497 16.036 15.6168 15.877 15.7788C15.8537 15.8021 15.8314 15.8273 15.8081 15.8506C15.6454 16.0118 15.4753 16.1665 15.2998 16.3135C15.2751 16.3345 15.2535 16.3562 15.228 16.3765C15.0525 16.5205 14.8684 16.6547 14.6816 16.7837C14.6524 16.8039 14.6259 16.8272 14.5967 16.8467C14.4174 16.9674 14.2305 17.0771 14.0415 17.1836C13.161 17.6778 12.1822 18.0181 11.1382 18.1606L14.147 15.8931L14.9717 15.0684L16 13V12.25L14.5 11.5H13.75L12.25 10H10.75L10 10.75V11.5L9.25 12.25V13.75L10.75 14.9497L9.26758 18.2134C5.06083 17.8399 1.75 14.3013 1.75 10C1.75 7.444 2.91925 5.15611 4.75 3.64111V4L4 4.75V6.39941L4.75 9.25L8.5 10.75H9.25V10L7 9.25V7.75H9.25L10 5.875L11.5 4.75V4L9.25 2.5L8.17188 1.96094C8.76062 1.82744 9.37075 1.75 10 1.75ZM9.25 8.5V9.25H10.75V8.5H9.25Z"
                    fill="white"
                    fillOpacity="0.6"
                  ></path>
                </svg>
              </div>
              <div className="hidden-languages">
                {hover && <p className="choose-language">Tilni tanlang: </p>}
                <p className="selected-lan">Uz</p>
                <>
                  <p className={hover ? "view-lan" : "hidden-lan"}>ru</p>
                  <p className={hover ? "view-lan" : "hidden-lan"}>en</p>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`app__menu ${openMenu ? "" : "closeMenu"}`}>
        <ul className="app__menu-links">
          <li className="app__navbar-link">
            <Link
              to="about"
              spy={true}
              offset={-90}
              duration={800}
              onClick={() => setOpenMenu(false)}
              activeClass="activeLink"
            >
              kompaniya
            </Link>
          </li>
          <li className="app__navbar-link">
            <Link
              to="services"
              spy={true}
              offset={-90}
              duration={800}
              onClick={() => setOpenMenu(false)}
              activeClass="activeLink"
            >
              xizmatlar
            </Link>
          </li>
          <li className="app__navbar-link">
            <NavLink to="/portfolio" onClick={() => setOpenMenu(false)}>
              portfolio
            </NavLink>
          </li>
          <li className="app__navbar-link">
            <Link
              to="vacansy"
              spy={true}
              offset={-90}
              duration={800}
              onClick={() => setOpenMenu(false)}
              activeClass="activeLink"
            >
              vakansiya
            </Link>
          </li>
        </ul>

        <div className="app__menu-call">
          <a href="tel:+998 71 200 70 07">
            <span>+998 71</span> 200 70 07
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
