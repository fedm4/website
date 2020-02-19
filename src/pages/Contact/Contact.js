import React from "react";

import "./Contact.scss";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faSkype} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className="contact content-section">
            <h1 className="title"><span className="title-underline">Cont</span>act</h1>
            <div className="content">
                <div className="contact-data">
                    <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:hello@fmarino.dev">hello@fmarino.dev</a>
                </div>
                <div className="contact-data">
                    <FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/federicomarinozubia/">https://www.linkedin.com/in/federicomarinozubia/</a>
                </div>
                <div className="contact-data">
                    <FontAwesomeIcon icon={faSkype} /><a href="skype:f.linwele?call">f.linwele</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;