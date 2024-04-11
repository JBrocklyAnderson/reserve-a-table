import React, { useState } from 'react';
import styles from './Nav.module.css';
import Logo from '../../assets/images/svg/Logo.svg';
import { Link } from 'react-router-dom';

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
        <nav>
            <Link to='/'>
                <img src={Logo} alt='Little Lemon Logo' />
            </Link>

            <svg className={`${styles.menu}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width={40} onClick={toggleNavbar}>
                {/* <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path fill='var(--olive)' d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
            </svg>

            <ul className={`${styles.navbar} ${toggle ? styles.flex : ''}`}>
                <li className={styles.navbarItem}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to='/our-story'>About</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to='/reserve-a-table'>Reservations</Link>
                </li>
                <li className={styles.navbarBtn}>
                    <Link to='/order-online' onClick={placeholderLinkAlert}>Order Online</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;