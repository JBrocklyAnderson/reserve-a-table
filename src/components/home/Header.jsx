import React from 'react';
import styles from './Header.module.css';
import HeaderImg from '../../assets/images/postcompress/LittleLemon-min.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInfoBlock}>
                <h1 className={styles.headerTxt}>Little Lemon</h1>
                <h2 className={styles.location}>Chicago</h2>
                <p className={styles.headerInfo}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='reserve-a-table' className={styles.headerBtn}>Reserve a table</Link>
            </div>
            <img src={HeaderImg} className={styles.headerImg} alt='A classic Italian caprese salad with basil, tomatoes, an mozzarella drizzled with single-source olive oil' />
        </header>
    );
}

export default Header;