import React from "react";
import "./degrees.css";

const data = [
  {
    id: 1,
    grade: "Bachelor's Degree",
    title: "Digital Solutions Engineer",
    school: "Studi HETIC",
    rncp: "RNCP 36146 (2026)",
    link: "/rncpDSE.pdf",
  },
  {
    id: 2,
    grade: "Master's Degree",
    title: "Business & Purchasing Management",
    school: "INSEEC Grande École",
    rncp: "RNCP 35029 (2024)",
    link: "Master_Management_Merged.pdf",
  },
  {
    id: 3,
    grade: "Bachelor's Degree",
    title: "International Business Management",
    school: "PPA",
    rncp: "RNCP 35106 (2022)",
    link: "/Bachelor_Business_Merged.pdf",
  },
  {
    id: 4,
    grade: "Bachelor's Degree",
    title: "Applied Foreign Languages (EN/JA)",
    school: "Jean Moulin University",
    rncp: "RNCP 25169 (2021)",
    link: "/Bachelor_AFL_Merged.pdf",
  },
];

const Degrees = () => {
  return (
    <section className="degrees container section" id="degrees">
      <h2 className="section__title">Degrees</h2>

      <div className="degrees__container grid">
        {data.map(({ id, grade, title, school, rncp, link }, index) => {
          const isOngoing = rncp.toLowerCase().includes("36146");

          return (
            <div
              className={`degrees__card ${index === 0 ? "first-card" : ""}`}
              key={id}
            >
              {isOngoing && <span className="degrees__badge">Ongoing</span>}

              <h3
                className={`degrees__grade ${index === 0 ? "first-grade" : ""}`}
              >
                {grade}
              </h3>
              <h4 className="degrees__title">{title}</h4>
              <p className="degrees__school">{school}</p>
              <p className="degrees__rncp">{rncp}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="degrees__link"
              >
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
