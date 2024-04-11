import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <nav>
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

export default Links;