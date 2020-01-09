import React from "react";

import "./Contact.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Contact = () => {
    return (
        <section className="services content-section">
            <h1 className="title"><span className="title-underline">Cont</span>act</h1>
            <div className="content">
                <p>Please feel free to contact me at <a href="mailto:fede.m.fede+dev@gmail.com">fede.m.fede+dev@gmail.com</a></p>
                <p></p>
            </div>
        </section>
    );
};

export default Contact;