import { Link } from 'react-router-dom';
import './SubmitBtn.scss'

const SubmitBtn = ({link}) => {
    return (
        <div className="app__landing-links">
        <Link to={link}>
          Brif to'ldirish
          <span>
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </Link>
        <Link  to={link}>
          Qo'ng'iroq
          <span>
            <i className="bi bi-telephone-fill"></i>
          </span>
        </Link>
      </div>
    )
}

export default SubmitBtn;