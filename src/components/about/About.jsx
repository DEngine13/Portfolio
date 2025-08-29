import React from "react";
import "./about.css";
import Image from "../../assets/Manga_portrait2.png";

const tags = [
  "Strategic Thinking",
  "Analytical Mindset",
  "Problem Solving",
  "Results-Oriented",
];

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 id="aboutTitle" className="section__title">
        About Me
      </h2>

      <div className="about__container grid">
        <img
          src={Image}
          alt="Portrait of Duncan Hamelin"
          className="about__img"
        />
        <div className="personality">
          <h3 className="Architect-Title">Architect | INTJ</h3>
          <div className="personality-tags">
            {tags.map((tag, index) => (
              <span className="personality-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I’m Duncan Hamelin, an aspiring Technical Project Manager with a
              passion for programming and a background in management. I bring a
              unique blend of technicality, strategic thinking, and multilingual
              communication skills to align cross-functional teams and deliver
              high-impact digital products.
            </p>
            <a href="/DuncanHamelin_CV.pdf" download className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
