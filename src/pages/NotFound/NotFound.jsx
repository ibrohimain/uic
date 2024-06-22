import "./NotFound.scss";
import { Link } from "react-router-dom";
import landingParallax from "../../containers/Landing/ParallaxComponent";

const NotFound = () => {
  // landing page parralax works every single url and occures error, following code fixes this
  document.removeEventListener("scroll", landingParallax);
  return (
    <section className="not-found">
      <h1>Not Found</h1>
      <Link to={"/"}>Back to home</Link>
    </section>
  );
};

export default NotFound;
