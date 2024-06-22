import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Loading } from "./components";
import {
  About,
  Contact,
  Landing,
  Partners,
  Portfolio,
  Services,
  VacancySuggest,
} from "./containers";
import { Vacansy, PortfolioPage, MainPortfolio, NotFound } from "./pages";

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};


function App() {
  return (
    <Router>
      <Navbar />
      <Loading />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <About />
              <Portfolio />
              <Services />
              <Contact />
              <Partners />
              <VacancySuggest />
            </>
          }
        />
        <Route path="/vacansy/:id" element={<Vacansy />} />
        <Route path="/" element={<About />} />
        <Route exact path="/portfolio" element={<MainPortfolio />} />
        <Route path="/portfolio/:type" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/portfolio/:type" element={<PortfolioComponent data={portolioData.portfolio.data} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
