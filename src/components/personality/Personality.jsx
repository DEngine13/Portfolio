import React from "react";
import "./personality.css";
import Image from "../../assets/Architect.png";

const tags = [
  "Vision-Driven",
  "Strategic Thinker",
  "Analytical Mindset",
  "Results-Oriented",
];

const Personality = () => {
  return (
    <section className="personality container section" id="personality">
      <h2 className="section__title">Personality</h2>

      <div className="personality-card">
        <div className="personality-image">
          <img src={Image} alt="Duncan Hamelin Portrait" />
        </div>

        <div className="personality-content">
          <h2 className="personality-heading">Architect (INTJ)</h2>
          <p className="personality-subtitle">
            Imaginative and strategic thinker with a plan for everything.
          </p>

          <div className="personality-tags">
            {tags.map((tag, index) => (
              <span className="personality-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personality;