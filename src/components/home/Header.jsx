import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderImg from '../../assets/images/postcompress/HeaderImg-min.jpg';



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInfoBlock}>
                <h1 className={styles.headerTxt}>Little Lemon</h1>
                <h2 className={styles.location}>Chicago</h2>
                <p className={styles.headerInfo}>We are a family owned Italian restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/reserve-a-table' className={styles.headerBtn}>Reserve a table</Link>
            </div>
            <img src={HeaderImg} className={styles.headerImg} alt='The Little Lemon sign hangs over the wait staff as they serve their patrons, who enjoy their meals in a quaint restaurant whose walls remind us of Tuscany.' />
        </header>
    );
}

export default Header;