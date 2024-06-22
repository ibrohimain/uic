import "./VacancySuggest.scss";
import vacansyData from "../../data/data.json";
import { Link } from "react-router-dom";

const VacancySuggest = () => {
  return (
    <section className="app__vacansy-suggest" id="vacansy">
      <div className="container">
        <div className="app__vacansy-wrapper">
          <div className="app__vacansy-info">
            <h1>{`Shu jamoa orasida siz ham bo'lishingiz mumkin :)`}</h1>
            <p>
              Biz bilan birga yuksalmoqchimisiz? Keling, bizga kerakligingizni
              isbotlang! Jamoaning ajralmas bo'lagiga aylaning.
            </p>
          </div>
          <div className="app__vacansy-links">
            <ul>
              {vacansyData.vacansy.data.map((vacansy, i) => (
                <li key={vacansy.id}>
                  <span></span>
                  <Link to={`/vacansy/${vacansy.id}`}>
                    {vacansy.inviteType}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacancySuggest;
