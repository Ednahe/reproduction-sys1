import React from "react";
import logo from '../images/logo.png';
import '../styles/nav.css';

const Nav = () => {

    return <div className="contain-nav">
        <div className="contain-logo">
            <a href="https://sys1.fr/">
            <img src={logo} className="logo"/></a>
        </div>
        <nav>
            <ul>
                <li className="first-li">
                    <a href="#" className="a-nav">Votre société</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Vos services</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Vos solutions</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Vos logiciels</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Votre support</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Vous rejoindre</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Vos actualités</a>
                </li>
                <li>
                    <a href="#" className="a-nav">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
};

export default Nav;