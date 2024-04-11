import React, { useState } from 'react';
import Links from './Nav';
import NavLogo from './NavLogo';
import MenuToggle from './MenuToggle';
import styles from './Nav.module.css';

export const placeholderLinkAlert = (e) => {
    e.preventDefault();
    alert('This page is coming soon!');
};

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleNavbar = () => {
        setToggle(!toggle);
    }

    return (
        <div className={styles.flex}>
            <div className={styles.mobileNav}>
                <NavLogo />
                <MenuToggle onClick={toggleNavbar} />
            </div>

            <Links />
        </div>
    );
};

export default Nav;