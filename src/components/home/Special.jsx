import React from 'react';
import styles from './Special.module.css';

// Import images
import Campanelle from '../../assets/images/postcompress/Campanelle-min.jpg';
import Salmon from '../../assets/images/postcompress/Salmon-min.jpg';
import Caprese from '../../assets/images/postcompress/Caprese-min.jpg';
import Bolognese from '../../assets/images/postcompress/Bolognese-min.jpg';
import Pampanella from '../../assets/images/postcompress/Pampanella-min.jpg';
import Bruschetta from '../../assets/images/postcompress/Bruschetta-min.jpg';
import Tiramisu from '../../assets/images/postcompress/Tiramisu-min.jpg';

const Special = ({ data }) => {
    let imgSrc;
    switch (data.title) {
        case 'Campanelle':
            imgSrc = Campanelle;
            break;
        case 'Seared salmon':
            imgSrc = Salmon;
            break;
        case 'Caprese salad':
            imgSrc = Caprese;
            break;
        case 'Bolognese':
            imgSrc = Bolognese;
            break;
        case 'Pampanella molisana':
            imgSrc = Pampanella;
            break;
        case 'Bruschetta':
            imgSrc = Bruschetta;
            break;
        case 'Chocolate Tiramisu':
            imgSrc = Tiramisu;
            break;
    };

    return (
        <div className={styles.special}>
            <img src={imgSrc} alt={data.title} />
            <article className={styles.article}>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <p>{data.price}</p>
            </article>
        </div>
    );
};

export default Special;