import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "./Services.scss";


const Services = () =>{
    const services = [
        {
            icon: "analytics.svg",
            title: "Analytics",
            body: "Im the best in analytics! I can offer you the best analytics stuff you will ever have and you will be surprised with the quality and test"
        },
        {
            icon: "coding.svg",
            title: "FrontEnd Development",
            body: "FrontEnd Development focused on the interactions and the design of the page for you or your clients to feel comfortable and engaged while navigating through the depths of the cthulhean sea, as far as the black skies allow us."
        },
        {
            icon: "browser.svg",
            title: "Browser",
            body: "Browser is the way to go, dude!"
        },
        {
            icon: "connection.svg",
            title: "Connection",
            body: "Connection is the real stuff in connecting stuff"
        },
        {
            icon: "layers.svg",
            title: "Layers",
            body: "So many layers of complexity will win me money"
        },
        {
            icon: "seo-and-web.svg",
            title: "SEO and Web",
            body: "SEO is a tool. Web is a tool. I do both."
        }
    ];
    return (
        <section className="services content-section">
            <h1 className="title"><span className="title-underline">Serv</span>ices</h1>
            <div className="content">
                {services.map(ServiceCard)}
            </div>
        </section>
    );
};

export default Services;