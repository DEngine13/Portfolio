import React from "react";
import "./certifications.css";

const data = [
  {
    id: 1,
    grade: "Certified",
    title: "Professional Full-Stack Web Developer",
    school: "French Ministry of Labor",
    year: "RNCP 37674 (2025)",
    link: "/Graduate_DWWM_Merged.pdf",
  },
  {
    id: 2,
    grade: "Certified",
    title: "Professional Scrum Product Owner I",
    school: "Scrum.org",
    year: "2025",
    link: "/Professional_Scrum_Product_Owner_I.pdf",
  },
  // {
  //   id: 2,
  //   grade: "Certified",
  //   title: "Professional Agile Leadership (EBM)",
  //   school: "Scrum.org",
  //   year: "2025",
  //   link: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
  // },
  // {
  //   id: 2,
  //   grade: "Certified",
  //   title: "Professional Scrum Developer",
  //   school: "Scrum.org",
  //   year: "2025",
  //   link: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
  // },
  {
    id: 3,
    grade: "Certified",
    title: "English Proficiency (TOEIC)",
    school: "ETS",
    year: "985/990 (2024)",
    link: "/TOEIC.pdf",
  },
  // {
  //   id: 4,
  //   grade: "Certified",
  //   title: "Japanese-Language Proficiency Test (JLPT)",
  //   school: "JLPT",
  //   year: "JLPT N2 (2027)",
  //   link: "/TOEIC.pdf",
  // },
];

const Certifications = () => {
  return (
    <section className="certifications container section" id="certifications">
      <h2 className="section__title">Certifications</h2>

      <div className="certifications__container grid">
        {data.map(({ id, grade, title, school, year, link }) => {
          return (
            <div className="certifications__card" key={id}>
              <h3 className="certifications__grade">{grade}</h3>
              <h4 className="certifications__title">{title}</h4>
              <p className="certifications__school">{school}</p>
              <p className="certifications__year">{year}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="certifications__link"
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

export default Certifications;
