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
      "Passionate by programming, I use the knowledge I developed learning different kinds of programming languages and frameworks to achieve the best results.",
  },
  {
    id: 2,
    image: Image2,
    title: "Management",
    description:
      "My Management background and degrees allow me to approach projects with a strategic and organizational mindset, ensuring efficiency and quality.",
  },
  {
    id: 3,
    image: Image3,
    title: "Foreign Languages",
    description:
      "Proficient in English, French, and Japanese, I leverage my multilingual communication skills to facilitate international coordination across global development teams.",
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
