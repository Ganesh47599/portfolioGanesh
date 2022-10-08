import "./App.css";
import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Education from "./Pages/Education";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Jsprojects from "./Pages/jsproject";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
      {/* <Home/>
      <About />
      <Services/>
      <Education/>
      <Work/>
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/myportfolio" element={<Home />}></Route>
        <Route path="/myportfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/education" element={<Education />}></Route>
   
    <Route path="/jsproject" element={<Jsprojects/>}/>
        {/*<Route path="/portfolio" element={<Portfolio />}></Route>*/}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;