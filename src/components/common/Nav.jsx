import React, { useState } from 'react';
import styles from './Nav.module.css';
import Logo from '../../assets/images/svg/Logo.svg';
import { Link } from 'react-router-dom';

export const placeholderLinkAlert = (e) => {
    e.preventDefault();
    alert('This page is coming soon!');
};

const Nav = () => {
    {/* Initialize state to track menu toggle */}
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.mobile}>
                <Link to='/'>
                    <img src={Logo} alt='Little Lemon Logo' />
                </Link>

                {!isOpen ? (
                    <svg className={`${styles.menu}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' onClick={toggleNavbar}>
                        {/* <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
                    </svg>
                ) : (
                    <svg className={`${styles.menu}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' onClick={toggleNavbar}>
                        {/* <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->*/}
                        <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/>
                    </svg>
                )}
            </div>

            <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                <li>
                    <Link to='/' className={`${styles.clickable} ${styles.link}`}>Home</Link>
                </li>
                <li>
                    <Link to='/our-story' className={`${styles.clickable} ${styles.link}`}>About</Link>
                </li>
                <li>
                    <Link to='/menu' className={`${styles.clickable} ${styles.link}`}>Menu</Link>
                </li>
                <li>
                    <Link to='/reserve-a-table' className={`${styles.clickable} ${styles.link}`}>Reservations</Link>
                </li>
                <li className={styles.navbarBtn}>
                    <Link to='/order-online' className={`${styles.clickable} ${styles.link}`} onClick={placeholderLinkAlert}>Order Online</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;