import styles from './Review.module.css';
// Import avatars
import engineer from '../../assets/images/postcompress/engineer-min.jpg';
import firefighter from '../../assets/images/postcompress/firefighter-min.jpg';
import welder from '../../assets/images/postcompress/welder-min.jpg';
import priestess from '../../assets/images/postcompress/priestess-min.jpg';
import archaeologist from '../../assets/images/postcompress/archaeologist-min.jpg';
import doctor from '../../assets/images/postcompress/doctor-min.jpg';
import teacher from '../../assets/images/postcompress/teacher-min.jpg';

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