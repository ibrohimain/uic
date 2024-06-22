import "./Services.scss";
import serviceData from "../../data/data.json";
import { motion } from "framer-motion";

const Services = () => {
  
  return (
    <section className="app__service" id="services">
      <div className="container">
        <div className="app__service-header">
          <div className="app__service-headline">
            <h1>bizning</h1>
            <span></span>
          </div>
          <h1 className="service-heading">Xizmatlarimiz</h1>
        </div>
        <div className="app__service-links">
          {serviceData.services.data.length > 0 && (
            <>
              {serviceData.services.data.map((data, i) => (
                <motion.div
                  key={i}
                  className="app__service-link"
                  whileInView={{ y: [40, 0] }}
                >
                  <a href={data.id}>
                    <span>{data.name}</span>
                    <p>{data.description}</p>
                  </a>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
