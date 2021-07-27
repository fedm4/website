import React, {useEffect} from "react";
import Link from 'next/link';
import { init } from "../helpers/CanvasHelper";

const MainNav = ({...ctx}) => {

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

    const navItem = (item, index) =>{
        return (
            <Link className="nav-link-main" key={item.key} href={item.link}>
                <a className="nav-item title-fonts" data-number={index}>
                    <span>{item.label}</span>
                </a>
            </Link>
        );
    };


    useEffect(() => {            
        init(ctx);
    });

    return (
        <nav className="main-nav">
            { navItemsData.map(navItem) }
        </nav>
    );
};

export default MainNav;