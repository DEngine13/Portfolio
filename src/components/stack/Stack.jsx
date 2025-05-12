import React from "react";
import "./stack.css";

import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JS from "../../assets/JS.png";
import TypeScript from "../../assets/TypeScript.svg";
import GitHub from "../../assets/GitHub.svg";
import MongoDB from "../../assets/MongoDB.svg";
import NODEJS from "../../assets/NodeJs.svg"
import Angular from "../../assets/Angular.svg";
import MySQL from "../../assets/MySQL.svg";
import ReactLogo from "../../assets/React.png";
import Figma from "../../assets/Figma.svg";
import Notion from "../../assets/Notion.svg";
import Trello from "../../assets/Trello.svg";
import Jira from "../../assets/Jira.svg";
import Confluence from "../../assets/Confluence.svg";

const data = [
    { id: 1, image: HTML, title: "HTML" },
    { id: 2, image: CSS, title: "CSS" },
    { id: 3, image: JS, title: "JavaScript" },
    { id: 4, image: TypeScript, title: "TypeScript" },
    { id: 5, image: ReactLogo, title: "React" },
    { id: 6, image: Angular, title: "Angular" },
    { id: 7, image: GitHub, title: "GitHub" },
    { id: 8, image: NODEJS, title: "Node.js" },
    { id: 9, image: MySQL, title: "MySQL" },
    { id: 10, image: MongoDB, title: "MongoDB" },
    { id: 11, image: Notion, title: "Notion"},
    { id: 12, image: Figma, title: "Figma"},
    { id: 13, image: Trello, title: "Trello"},
    { id: 14, image: Jira, title: "Jira"},
    { id: 15, image: Confluence, title: "Confluence"},
    
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
