import { SubmitBtn } from "../../components";
import "./About.scss";
import AboutImgs from "./AboutImgs";
import { images } from "../../constants";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imgFirst = [images.about_1_1, images.about_1_2, images.about_1_3];
const imgSecond = [images.about_2_1, images.about_2_2];

const About = () => {
  const [firstViewSlider, setFirstViewSlider] = useState(false);
  const [secondViewSlider, setSecondViewSlider] = useState(false);

  const handleModalClick = () => {
    if (firstViewSlider || secondViewSlider) {
      setFirstViewSlider(false);
      setSecondViewSlider(false);
    }
  };

  useEffect(() => { 
    if (firstViewSlider || secondViewSlider) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [firstViewSlider, secondViewSlider]);

  return (
    <section className="app__about" id="about">
      <AboutImgs images={imgFirst} view={firstViewSlider} />
      <AboutImgs images={imgSecond} view={secondViewSlider} />
      <div
        className="modal-bg"
        style={{
          display: `${firstViewSlider || secondViewSlider ? "block" : "none"}`,
        }}
        onClick={handleModalClick}
      ></div>
      <div className="container">
        <div className="app__about-wrapper">
          <div className="app__about-images">
            <div>
              <motion.div
                whileInView={{ y: [-80, 0], opacity: [0, 1] }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="app__about-img"
                onClick={() => setFirstViewSlider(true)}
              >
                <img
                  src={images.expandIcon}
                  alt="icon"
                  className="expand-icon"
                />
                <img src={images.about_1_1} alt="About img" />
              </motion.div>
              <div className="app__about-imgText">
                <h1>10</h1>
                <h3>
                  Yillik malakaga ega <br /> jamoa
                </h3>
              </div>
            </div>
            <motion.div
              whileInView={{ y: [80, 0], opacity: [0, 1] }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="app__about-img"
              onClick={() => setSecondViewSlider(true)}
            >
              <img src={images.expandIcon} alt="icon" className="expand-icon" />
              <img src={images.about_2_1} alt="About img" />
            </motion.div>
          </div>
          <div className="app__about-desc">
            <motion.div
              whileInView={{ x: [70, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              className="about__desc-header"
            >
              <span></span>
              <h3>Bir so'z bilan aytganda</h3>
            </motion.div>
            <motion.div
              whileInView={{ x: [70, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="about-info"
            >
              <h1>Biz haqimizda</h1>
              <motion.p
                whileInView={{ x: [70, 0], opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {" "}
                “UIC Group” kompaniyasi O'zbekistondagi istalgan murakkablikdagi
                IT olamining barcha jabhalarida oʻz xizmatlarini taklif qiladi.
                “UIC Group” oʻz qadriyatlariga ega boʻlgan va sifat nazoratisiz
                oʻtmaydigan loyihalar manzili. Kompaniyamizdagi har bir
                imkoniyat va talab masʼuliyat bilan mijozlarimiz talabini eng
                yuqori koʻrsatkichlarda qondirishi uchun xizmat qiladi.
                Kompaniyamiz mijozlarni shunchaki mijoz emas, ularga bir umrlik
                hamkor sifatida eng yaxshi takliflar bilan xizmat ko'rsatishga
                tayyor!
              </motion.p>
            </motion.div>
            <motion.div
              whileInView={{ x: [70, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="why-us"
            >
              <div>
                <span>
                  <i className="bi bi-lightning-charge"></i>
                </span>
                <span>
                  Tezkor <br /> yechimlar
                </span>
              </div>
              <div>
                <span>
                  <i className="bi bi-fire"></i>
                </span>
                <span>
                  Takrorlanmas <br /> loyihalar
                </span>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ x: [70, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <SubmitBtn link={"/"} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
