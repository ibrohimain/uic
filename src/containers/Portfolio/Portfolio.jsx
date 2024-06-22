import "./Portfolio.scss";
import { PortfolioComponent } from "../../components";
import porfolioData from "../../data/data.json";
import { NavLink } from "react-router-dom";

const data = [];

// this data for landing page, portfolio must be max 10 data
for (let i = 0; i < porfolioData.portfolio.data.length; i++) {
  if (i < 10) {
    data.push(porfolioData.portfolio.data[i]);
  } else {
    break;
  }
}

const Portfolio = () => {
  return (
    <section className="app__portfolio">
      <div className="container">
        <div className="app__portfolio-header">
          <h1>Portfolio</h1>
          <ul>
            <li>
              <NavLink to="/portfolio/mobile-program">mobil ilovalar</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/web-site">veb-saytlar</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/brend">brending</NavLink>
            </li>
          </ul>
        </div>
        <PortfolioComponent data={data} />
      </div>
    </section>
  );
};

export default Portfolio;
