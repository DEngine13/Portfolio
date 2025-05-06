import React from "react";
import "./stack.css";

import HTML from "../../assets/HTMLLogo.png";
import CSS from "../../assets/CSS.png";
import JS from "../../assets/JS.png";
import TypeScript from "../../assets/typescript.png";
import GitHub from "../../assets/github.png";
import MongoDB from "../../assets/MongoDB.png";
import NODEJS from "../../assets/NODEJS.png";
import Express from "../../assets/ExpressLogo3.png";
import MySQL from "../../assets/mysql.png";
import ReactLogo from "../../assets/React.png";

const data = [
    { id: 1, image: HTML, title: "HTML" },
    { id: 2, image: CSS, title: "CSS" },
    { id: 3, image: JS, title: "JavaScript" },
    { id: 4, image: TypeScript, title: "TypeScript" },
    { id: 5, image: ReactLogo, title: "React" },
    { id: 6, image: GitHub, title: "GitHub" },
    { id: 7, image: NODEJS, title: "Node.js" },
    { id: 8, image: Express, title: "Express" },
    { id: 9, image: MySQL, title: "MySQL" },
    { id: 10, image: MongoDB, title: "MongoDB" },
];

const Stack = () => {
    return (
<section className="stack container section" id="stack">
      <h2 className="section__title">Stack</h2>

      <div className="stack__container">
        {data.map(({ id, image, title }) => {
          return (
            <div className="stack__card" key={id}>
                <img src={image} alt={title} className="stack__image" />
                <h3 className="stack__card-title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
    );
};

export default Stack;
