import "./Vacansy.scss";
import { useParams } from "react-router-dom";
import vacansyData from "../../data/data.json";
import landingParallax from "../../containers/Landing/ParallaxComponent";
import { SubmitSingleBtn, InputComponent, InputNumber } from "../../components";
import { motion } from "framer-motion";
import { useState } from "react";

const Vacansy = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  // landing page parralax works every single url and occures error, following code fixes this
  document.removeEventListener("scroll", landingParallax);

  const findId = vacansyData.vacansy.data.find((job) => job.id === id);

  return (
    <section className="app__vacansyPage">
      <div className="container">
        <div className="app__vacansyPage-header">
          <h1>{findId.inviteType}</h1>
          <div className="app__vacansy-date">
            <div>
              <span>
                <i className="bi bi-calendar-date"></i>
              </span>
              <p>{findId.date}</p>
            </div>
            <div>
              <span>
                <i className="bi bi-clock"></i>
              </span>
              <p>{findId.hour}</p>
            </div>
          </div>
          <div className="salary">
            <span> <i className="bi bi-wallet2"></i> {findId.salary}</span>
          </div>
        </div>

        <div className="app__vacansy-requirements">
          <h1 className="app__vacansy-heading">Talablar</h1>
          <ul>
            {findId.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="app__vacansy-tasks">
          <h1 className="app__vacansy-heading">Vazifalar</h1>
          <ul>
            {findId.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="app__vacansy-info">
          <h1 className="app__vacansy-heading">Shartlar</h1>
          <p>
            - Doimiy rivojlanish <br />
            - Professional va o'z qadriyatlariga ega jamoa <br />
            - Shaxsiy rivojlanish qo'llab-quvvatlash <br />
            - Yaxshi oylik ish haqi <br />
            - Markazdan office <br />
          </p>
        </div>

        {openModal && (
          <>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              onClick={() => setOpenModal(false)}
              className="modal-bg"
            ></motion.div>
            <div className="app__vacansy-modal">
              <span
                className="app__vacansy-modalClose"
                onClick={() => setOpenModal(false)}
              >
                <i className="bi bi-x"></i>
              </span>
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                }}
              >
                <div className="vacansy__modal-input">
                  <div className="form-input">
                    <InputComponent>
                      <label htmlFor="name">FISH</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Ismingizni kiriting"
                      />
                    </InputComponent>
                  </div>
                  <div className="form-input">
                    <InputComponent>
                      <InputNumber />
                    </InputComponent>
                  </div>
                </div>
                <div className="load-cv">
                  <label htmlFor="cv-upload" className="custom-file-upload">
                    CV'ingizni yuklang
                    <span>
                      <i className="bi bi-upload"></i>
                    </span>
                  </label>
                  <input type="file" id="cv-upload" />
                </div>
                <div className="app__vacansy-btn">
                  <SubmitSingleBtn link={""}>Rezume yuborish</SubmitSingleBtn>
                </div>
              </motion.div>
            </div>
          </>
        )}

        <div className="app__vacansy-btn" onClick={() => setOpenModal(true)}>
          <SubmitSingleBtn link={""}>Rezume yuborish</SubmitSingleBtn>
        </div>
      </div>
    </section>
  );
};

export default Vacansy;
