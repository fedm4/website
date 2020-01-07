import React from "react";

import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <section className="about-me">
            <h1 className="title"><span className="title-underline">Abou</span>t Me</h1>
            <article className="content">
                <p>
                    Hi! I'm Federico and I have 10+ years of experience in software, designing and creating solutions that can help businesses grow, coming either from a client's idea, or a research of what tool can be the next step for the company to expand, reduce costs and automate processes.
                </p>
                <p>
                    My experience goes from fin tech and e-commerce to tourism and telecommunications, including insurance and marketing.
                    I'm currently teaching front-end development, focused on react, on a non governmental organization.
                </p>
                <p>
                    My technical knowledge varies from web applications development in both front-end as well as back-end, to micro services and lambda functions. I also have experience with web servers both designing, maintaining, and migrating data or entire systems from standard web servers to a cloud based system.
                </p>
            </article>
        </section>
    );
};
export default AboutMe;