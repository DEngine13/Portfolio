import React, { useState } from "react";
import "./services.css";
import Image1 from "../../assets/Code.svg";
import Image2 from "../../assets/Management.svg";
import Image3 from "../../assets/Planet.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "A strong foundation in coding enables me to understand technical constraints and opportunities, shaping realistic and innovative product visions to meet customer satisfaction.",
    pun: "I might not fix your love life, but I'll definitely fix your app 💻",
  },
  {
    id: 2,
    image: Image2,
    title: "Management",
    description:
      "Management education and certifications empower me to lead with clarity and structure. True to Agile methods, I guide cross-functional teams, and strive to deliver high value products.",
    pun: "My backlog management is so refined, it plays chess and drinks wine 🍷",
  },
  {
    id: 3,
    image: Image3,
    title: "Foreign Languages",
    description:
      "Proficient in English, French, and Japanese, I facilitate seamless communication between international stakeholders and development teams, enhancing collaboration in global projects.",
    pun: "Three known languages—and ‘working together’ sounds great in all of them 🤝",
  },
];

const Services = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (id) => {
    if (flippedCards.includes(id)) {
      // Already flipped: unflip immediately
      setFlippedCards((prev) => prev.filter((cardId) => cardId !== id));
    } else {
      // Flip the card
      setFlippedCards((prev) => [...prev, id]);

      // Set timeout to flip it back after 3 seconds
      setTimeout(() => {
        setFlippedCards((prev) => prev.filter((cardId) => cardId !== id));
      }, 3000); // 3000 ms = 3 seconds
    }
  };

  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description, pun }) => {
          return (
            <div
              className={`services__card ${
                flippedCards.includes(id) ? "is-flipped" : ""
              }`}
              key={id}
              onClick={() => toggleFlip(id)}
            >
              <div className="services__card-inner">
                <div className={`services__card-front card-front-${id}`}>
                  <img src={image} alt="" className="services__img" />
                  <h3 className="services__title">{title}</h3>
                  <p className="services__description">{description}</p>
                </div>

                <div className="services__card-back">
                  <p className="services__pun">{pun}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
