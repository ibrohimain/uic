import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <NavLink to={"/"} className="footer-brand phone-variant">
          <img
            src="	https://uic.group/img/logo/footer-logo.svg"
            alt="footer-brand-img"
          />
          <div className="brand-text">
            <h1>UIC</h1>
            <span>Group</span>
          </div>
        </NavLink>
        <ul className="footer-links">
          <li>
            <Link to="about" spy={true} offset={-90} duration={800}>
              kompaniya
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} offset={-90} duration={800}>
              xizmatlar
            </Link>
          </li>
          <li>
            <NavLink to="/portfolio">portfolio</NavLink>
          </li>
          <li>
            <Link to="vacansy" spy={true} offset={-90} duration={800}>
              vakansiya
            </Link>
          </li>
        </ul>

        <div className="footer-connect">
          <a
            className="footer-social"
            href="https://www.facebook.com/uicgroup.org"
            target={"_blank"}
            rel='noreferrer'
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="footer-social"
            href="https://twitter.com/UIC_Group"
            target={"_blank"}
            rel='noreferrer'
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className="footer-social"
            href="https://www.instagram.com/uic.group"
            target={"_blank"}
            rel='noreferrer'
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="footer-social"
            href="https://t.me/uicgroup"
            target={"_blank"}
            rel='noreferrer'
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a className="footer-email" href="mailto:info@uic.group">
            <i className="bi bi-at"></i> info@uic.group
          </a>
          <a className="footer-phone" href="tel:+998712007007">
            <i className="bi bi-telephone-fill"></i> +998 71 200 70 07
          </a>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">UIC Group © 2022</span>
          <NavLink to={"/"} className="footer-brand">
            <img
              src="https://uic.group/img/logo/footer-logo.svg"
              alt="footer-brand-img"
            />
            <div className="brand-text">
              <h1>UIC</h1>
              <span>Group</span>
            </div>
          </NavLink>
          <div className="footer-map">
            <a href="https://yandex.com/maps/-/CCU4ELbzSD" target={"_blank"}
              rel='noreferrer'>
              Toshkent sh, Mirobod t, Aybeka 26
              <span>xaritada</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
