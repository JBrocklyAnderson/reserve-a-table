import React from 'react';
import styles from './Review.module.css';

// Import avatars
import engineer from '../../assets/images/webp/engineer.webp';
import firefighter from '../../assets/images/webp/firefighter.webp';
import welder from '../../assets/images/webp/welder.webp';
import priestess from '../../assets/images/webp/priestess.webp';
import archaeologist from '../../assets/images/webp/archaeologist.webp';
import doctor from '../../assets/images/webp/doctor.webp';
import teacher from '../../assets/images/webp/teacher.webp';

const Review = ({ data }) => {
    let imgSrc;
    switch (data.reviewer) {
        case 'Sara L.':
            imgSrc = engineer;
            break;
        case 'John D.':
            imgSrc = firefighter;
            break;
        case 'Nina P.':
            imgSrc = welder;
            break;
        case 'Maya E.':
            imgSrc = priestess;
            break;
        case 'Mike C.':
            imgSrc = archaeologist;
            break;
        case 'Emma Q.':
            imgSrc = doctor;
            break;
        case 'David T.':
            imgSrc = teacher;
            break;
    }

    const stars = Array.from({ length: data.rating}, (_, i) => (
        <span key={i}>&#9733;</span>
    ));

    return (
        <article className={styles.card}>
            {/* Rating stars */}
            <div>
                {stars}
            </div>

            <p>"{data.comment}"</p>
            <p>—{data.reviewer}</p>
            <img src={imgSrc} alt={`${data.reviewer}'s Avatar`} />
        </article>
    );
};

export default Review;