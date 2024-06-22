import { Link } from "react-router-dom";
import "./SubmitBtn.scss";

const SubmitSingleBtn = ({ link, children }) => {
  return (
    <Link to={link} className="single-btn">
      {children}
      <span className="arrow-btn">
        <i className="bi bi-arrow-right-short"></i>
      </span>
    </Link>
  );
};

export default SubmitSingleBtn;
