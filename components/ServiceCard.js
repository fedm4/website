import React from "react";

const ServiceCard = props => {
    return (
        <article key={props.title} className="service-card">
            <header>
                <img src={props.icon} />
                <h2>{props.title}</h2>
            </header>
            <p>
                {props.body}
            </p>
        </article>
    );
};

export default ServiceCard;
