import "./Portfolio.scss";
import { NavLink, useParams } from "react-router-dom";
import portolioData from "../../data/data.json";
import { PortfolioComponent } from "../../components";
import landingParallax from "../../containers/Landing/ParallaxComponent";

const Portfolio = () => {
  
  // landing page parralax works every single url and occures error, following code fixes this
  document.removeEventListener("scroll", landingParallax);

  const { type } = useParams();

  const findType = portolioData.portfolio.data.filter(
    (item) => item.type === type
  );

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

        <PortfolioComponent data={findType} />
      </div>
    </section>
  );
};

export default Portfolio;
