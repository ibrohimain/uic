import "./Partners.scss";
import { motion } from "framer-motion";
import partnerData from "../../data/data.json";

const Partners = () => {
  return (
    <section className="app__partners">
      <div className="container">
        <div className="app__partners-header">
          <span>hamkorlar</span>
          <h1>Bizga ishonadigan kompaniyalar</h1>
        </div>
        <div className="app__partners-item">
          {partnerData.partners.data.map((partner, i) => (
            <motion.a
              whileInView={{ y: [50, 0] }}
              transition={{ duration: 0.3 }}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <img src={partner.imgUrl} alt="partner-img" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
