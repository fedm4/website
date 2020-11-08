import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () =>{
    const services = [
        /*{
            icon: AnalyticsIcon,
            title: "Analytics",
            body: "Im the best in analytics! I can offer you the best analytics stuff you will ever have and you will be surprised with the quality and test"
        },*/
        {
            icon: "/img/icons/coding.svg",
            title: "FrontEnd Development",
            body: "FrontEnd Development focused on the interactions and the design of the page for you or your users to feel comfortable and engaged while navigating through the application."
        },
        {
            icon: "/img/icons/browser.svg",
            title: "BackEnd Development",
            body: "BackEnd Development with top technologies using relational and non relational databases, and different architectures such as MVC pattern or Micro Services, to fit your needs."
        },
        {
            icon: "/img/icons/connection.svg",
            title: "Application Design",
            body: "I can help you design the application you imagine, with the technical knowledge to help you make decisions based on what's best for your app."
        }, 
        /*{
            icon: LayerIcon,
            title: "Layers",
            body: "So many layers of complexity will win me money"
        },
        {
            icon: SeoIcon,
            title: "SEO and Web",
            body: "SEO is a tool. Web is a tool. I do both."
        }*/
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
