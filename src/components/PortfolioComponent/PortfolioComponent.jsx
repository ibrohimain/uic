import "./PortfolioComponent.scss";
import { motion } from "framer-motion";

const PortfolioComponent = ({ data }) => {
  return (
    <div className="app__protfolio-component">
      {data.length > 0 &&
        data.map((item, i) => (
          <motion.a
            whileInView={{ x: [-50, 0] }}
            transition={{duration: 0.3}}
            href={item.url}
            target="_blank"
            rel='noreferrer'
            key={i}
            className={`portfolio__items-wrap ${
              item.layoutBig ? "items__wrap-big" : ""
            }`}
          >
            <div className="porfolio-header">
              <h1>{item.name}</h1>
              <p>{item.typeName}</p>
            </div>
            <img src={item.imgUrl} alt="portfolio img" />
            <div className="portfolio-more">
              <p>keysni ko'rish</p>
              <span>
                <i className="bi bi-arrow-right-short"></i>
              </span>
            </div>
          </motion.a>
        ))}
    </div>
  );
};

export default PortfolioComponent;
