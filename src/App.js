import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Degrees from "./components/degrees2/degrees";
import Certifications from "./components/certifications/Certifications";
import Portfolio from "./components/portfolio/Portfolio";
import Stack from "./components/stack/Stack";
import Footer from "./components/footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Degrees />
        <Certifications />
        <Stack />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
};

export default App;
