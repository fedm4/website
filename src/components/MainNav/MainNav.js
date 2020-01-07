import React from "react";

import "./MainNav.scss";

const MainNav = () => {

    const navItemsData = [
        {
            key: "nav-1",
            link: "/",
            label: "About Me"
        },
        {
            key: "nav-2",
            link: "#",
            label: "Services"
        },
        {
            key: "nav-3",
            link: "#",
            label: "Portfolio"
        },
        {
            key: "nav-4",
            link: "#",
            label: "Contact"
        }
    ];

    const navItem = item =>{
        return (
            <a className="nav-item title-fonts" href={item.link} key={item.key}><span>{item.label}</span></a>
        );
    };

    return (
        <nav className="main-nav">
            { navItemsData.map(navItem) }
        </nav>
    );
};

export default MainNav;