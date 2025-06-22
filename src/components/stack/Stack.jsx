import "./stack.css";

import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JS from "../../assets/JS.png";
import TypeScript from "../../assets/TypeScript.svg";
import GitHub from "../../assets/GitHub.svg";
import MongoDB from "../../assets/MongoDB.svg";
import NODEJS from "../../assets/NodeJs.svg";
import PHP from "../../assets/PHP.svg";
import PYTHON from "../../assets/Python.svg";
import MySQL from "../../assets/MySQL.svg";
import ReactLogo from "../../assets/React.svg";
import ReactNative from "../../assets/ReactNative.svg";
import FLASK from "../../assets/Flask.svg";
import VUE from "../../assets/Vue.svg";
import DJANGO from "../../assets/Django.svg";
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
  { id: 6, image: VUE, title: "Vue" },
  { id: 7, image: NODEJS, title: "Node.js" },
  { id: 8, image: MySQL, title: "MySQL" },
  { id: 9, image: MongoDB, title: "MongoDB" },
  { id: 10, image: GitHub, title: "GitHub" },
  { id: 11, image: Notion, title: "Notion" },
  { id: 12, image: Figma, title: "Figma" },
  { id: 13, image: Trello, title: "Trello" },
  { id: 14, image: Jira, title: "Jira" },
  { id: 15, image: Confluence, title: "Confluence" },
  { id: 16, image: PYTHON, title: "Python" },
  { id: 17, image: FLASK, title: "Flask" },
  { id: 18, image: DJANGO, title: "Django" },
  { id: 19, image: PHP, title: "PHP" },
  { id: 20, image: ReactNative, title: "React Native" },
];

const Stack = () => {
  return (
    <section className="stack container section" id="stack">
      <h2 className="section__title">Stack</h2>

      <div className="stack__container">
        {data.map(({ id, image, title }) => {
          const isUpcoming = id >= 16;
          return (
            <div className="stack__card" key={id}>
              <img
                src={image}
                alt={title}
                className={id >= 16 ? "stack__image native" : "stack__image"}
              />
              <h3
                className={
                  id >= 16 ? "stack__card-title upcoming" : "stack__card-title"
                }
              >
                {title}
              </h3>
              {isUpcoming ? <span className="Stack__badge">Upcoming</span> : ""}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
