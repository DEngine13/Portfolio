import React from "react";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a
                href="https://www.linkedin.com/in/duncan-hamelin-8b8165206"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
                href="https://github.com/DEngine13"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    );
}

export default HeaderSocials;