import React from "react";
import "./services.css";
import Image1 from "../../assets/HTML.png";
import Image2 from "../../assets/Management.png";
import Image3 from "../../assets/International.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "A strong foundation in coding enables me to understand technical constraints and opportunities, helping to shape realistic and innovative product visions to meet customer satisfaction.",
  },
  {
    id: 2,
    image: Image2,
    title: "Management",
    description:
      "Management education and certifications empower me to lead with clarity and structure. True to Agile methods, I guide cross-functional teams, and strive to deliver high value products.",
  },
  {
    id: 3,
    image: Image3,
    title: "Foreign Languages",
    description:
      "Proficient in English, French, and Japanese, I facilitate seamless communication between international stakeholders and development teams, enhancing collaboration in global projects.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
