import { NavLink } from "react-router-dom";
import { PortfolioComponent } from "../../components";
import data from "../../data/data.json";
import landingParallax from "../../containers/Landing/ParallaxComponent";

const MainPortfolio = () => {
  // landing page parralax works every single url and occures error, following code fixes this
  document.removeEventListener("scroll", landingParallax);
  return (
    <section className="app__portfolio-page">
      <div className="container">
        <div className="app__portfolio-header">
          <h1>Portfolio</h1>
        </div>

        <ul className="portfolio__links-wrapper">
          <li>
            <NavLink to={"/portfolio"}>
              <i className="bi bi-grid-fill"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio/mobile-program"}>Mobil Ilovalar</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio/web-site"}>veb-saytlar</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio/brend"}>Brending</NavLink>
          </li>
        </ul>

        <PortfolioComponent data={data.portfolio.data} />
      </div>
    </section>
  );
};

export default MainPortfolio;
