import React from "react";
import Link from 'next/link'

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
            <Link key={item.key} href={item.link}>
                <a className="nav-item title-fonts">
                    <span>{item.label}</span>
                </a>
            </Link>
        );
    };

    return (
        <nav className="main-nav">
            { navItemsData.map(navItem) }
        </nav>
    );
};

export default MainNav;