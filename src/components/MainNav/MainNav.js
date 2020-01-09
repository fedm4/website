import React from "react";
import { Link } from "react-router-dom";

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
            link: "/services",
            label: "Services"
        },
        //{
        //    key: "nav-3",
        //    link: "#",
        //    label: "Portfolio"
        //},
        {
            key: "nav-4",
            link: "/contact",
            label: "Contact"
        }
    ];

    const navItem = item =>{
        return (
            <Link className="nav-item title-fonts" to={item.link} key={item.key}><span>{item.label}</span></Link>
        );
    };

    return (
        <nav className="main-nav">
            { navItemsData.map(navItem) }
        </nav>
    );
};

export default MainNav;