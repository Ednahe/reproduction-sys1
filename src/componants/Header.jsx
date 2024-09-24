import React from "react";
import devis from '../images/devis.png';
import support from '../images/support.png';
import Nav from './Nav';
import '../styles/header.css';

const Header = () => {

    return <header>
        <div className="top-head">
            <div>
                <a href="https://sys1.fr/#contact_bloc" target="_blank">
                <img src={devis} className="img-head" /></a>
            </div>
            <div>
                <a href="https://support.sys1.fr/" target="_blank">
                <img src={support} className="img-head" /></a>
                <a href="#"></a>
            </div>
        </div>
        <Nav />
    </header>
};

export default Header;