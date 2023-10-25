import Experience from "./Experience";
import Footer from "./Footer";
import Herosection from "./Herosection";
import NavBar from "./NavBar";
import Publication from "./Publication";
import { useRef } from "react";

const Layout = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const handleExperience = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlePublication = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleFooter = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar />
      <Herosection />

      <div ref={ref} handleExperience={handleExperience}>
        <Experience />
      </div>
      <div ref={ref3} handlePublication={handlePublication}>
        <Publication />
      </div>
      <div ref={ref4} handleFooter={handleFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
