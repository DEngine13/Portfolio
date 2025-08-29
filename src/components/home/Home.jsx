import React from "react";
import "./home.css";
import Me from "../../assets/Manga_portrait2.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Portrait" className="home__img" />
        <h1 className="home__name">Duncan Hamelin</h1>
        <span className="home__education">
          I am a (Full-Stack) Project Manager
        </span>

        <HeaderSocials />

        <a href="#about" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
