import React from 'react';
import { Link } from 'react-router-dom';
import { successMessage } from '../utils/successMessage';
import styles from './ReservationConfirmed.module.css';
import toast from '../../assets/images/postcompress/toast-min.jpg';



const ReservationConfirmed = ({ formData }) => {
    const message = successMessage(formData);

    return (
        <section className={styles.success}>
            <div>
                <img src={toast} />
            </div>

            <svg
                width='32px'
                height='32px'
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g id='layer1'>
                    <circle
                        fill='#48742c'
                        id='path1'
                        cx='50'
                        cy='50'
                        r='50'
                    />
                    <path
                        fill='var(--stone)'
                        d='M 22.884766,35.039062 16.65625,40.375 49.267578,78.441406 68.644531,60.486328 63.070312,54.470703 49.947266,66.628906 Z'
                        transform='matrix(-1.2159088,0,0,1.2227408,102.0578,-17.398952)'
                    />
                </g>
            </svg>
            <h2>SUCCESS!</h2>
            <p>{message}</p>
            <Link to='/'>Back to main</Link>
        </section>
    );
}

export default ReservationConfirmed;