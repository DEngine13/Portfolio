import React from "react";
import "./degrees.css";

const data = [
  {
    id: 1,
    grade: "Graduate's Degree",
    title: "Full-Stack Web Developer",
    school: "Wild Code School",
    rncp: "RNCP 37674 (2025)",
    link: "https://www.francecompetences.fr/recherche/rncp/37674/",
  },
  {
    id: 2,
    grade: "Master's Degree",
    title: "Business & Purchasing Management",
    school: "INSEEC",
    rncp: "RNCP 35029 (2024)",
    link: "https://www.francecompetences.fr/recherche/rncp/35029/",
  },
  {
    id: 3,
    grade: "Bachelor's Degree",
    title: "International Business Management",
    school: "PPA",
    rncp: "RNCP 35106 (2022)",
    link: "https://www.francecompetences.fr/recherche/rncp/35106/",
  },
  {
    id: 4,
    grade: "Bachelor's Degree",
    title: "Applied Foreign Languages (EN/JA)",
    school: "University of Lumière",
    rncp: "RNCP 25169 (2021)",
    link: "https://www.francecompetences.fr/recherche/rncp/25169/",
  },
];

const Degrees = () => {
  return (
    <section className="degrees container section" id="degrees">
      <h2 className="section__title">Degrees</h2>

      <div className="degrees__container grid">
        {data.map(({ id, grade, title, school, rncp, link }) => {
          return (
            <div className="degrees__card" key={id}>

              <h3 className="degrees__grade">{grade}</h3>
              <h4 className="degrees__title">{title}</h4>
              <p className="degrees__school">{school}</p>
              <p className="degrees__rncp">{rncp}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="degrees__link">
    View Credential
  </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Degrees;
