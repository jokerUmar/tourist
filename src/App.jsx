import { useState, useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Services from "./components/services/Services";
import MainV from "./components/mainV/MainV";
import About from "./components/about/About";
import Travel from "./components/travel/Travel";
import Contact from "./components/contact/Contact";
import { BarsContext } from "./components/context/barsContext";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contactPage/ContactPage";
import Market from "./pages/market/Market";
import Order from "./pages/Order/Order";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  let { setBars } = useContext(BarsContext);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize >= 921) {
    setBars(true);
  }

  const { pathname } = useLocation();

  console.log("parent ren");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainV />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel windowSize={windowSize} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/checkout" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {pathname == "/" || pathname == "/services" || pathname == "/about" ? (
        <Contact />
      ) : (
        ""
      )}

      {pathname == "/" ||
      pathname == "/services" ||
      pathname == "/about" ||
      pathname == "/travel" ||
      pathname == "/contact" ||
      pathname == "/market" ||
      pathname == "/checkout" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
