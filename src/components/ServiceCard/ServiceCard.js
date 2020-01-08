import React from "react";
import "./ServiceCard.scss";

const ServiceCard = props => {
    return (
        <article key={props.title} className="service-card">
            <header>
                <img src={`images/icons/${props.icon}`} />
                <h2>{props.title}</h2>
            </header>
            <p>
                {props.body}
            </p>
        </article>
    );
};

export default ServiceCard;