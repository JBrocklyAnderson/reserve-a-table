import { useState, useEffect } from 'react';
import ReservationConfirmed from '../reservationConfirmed/ReservationConfirmed';
import useFormValidation from '../hooks/useFormValidation';
import { genTimeSlots, getDate } from '../utils/fakeAPI';
import styles from './ReservationForm.module.css';


const today = getDate();

const ReservationForm = () => {
    // Set up initial form data
    const initialData = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: today,
        time: '5:00 PM',
        diningArea: 'indoors',
        seating: 'table',
        guestCount: 1,
        occasion: 'beingAlive',
        comment: ''
    };
    const [ formData, errors, handleBlur, handleChange ] = useFormValidation(initialData);
    const [ submitDisabled, setSubmitDisabled ] = useState(true); // Initially disable submit
    const [ submitted, setSubmitted ] = useState(false);

    // Generate a time table for Little Lemon's business hours
    const timeSlots = genTimeSlots(17, 20, new Date(formData.date));

    useEffect(() => {
        // Check if errors are present
        const errorsArePresent = Object.values(errors).some(error => error !== '')
        // Disable submission when errors are present
        setSubmitDisabled(errorsArePresent);
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <ReservationConfirmed formData={formData} />
        );
    };

    return (
        <div className={styles.layout}>
            <h1>Reservation details</h1>
            <h2>Customize your reservation with the Little Lemon restaurant.</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.contactInfo}>
                    <legend>Contact Information</legend>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        max={50}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        aria-invalid={errors.firstName ? 'true' : 'false' }
                        style={{ outline: errors.firstName !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='name'
                        required
                    />
                    {errors.firstName && <div className={styles.errorMessage} role='alert'>{errors.firstName}</div>}
                    <br />

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        max={50}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        aria-invalid={errors.lastName ? 'true' : 'false' }
                        style={{ outline: errors.lastName !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='name'
                        required
                    />
                    {errors.lastName && <div className={styles.errorMessage} role='alert'>{errors.lastName}</div>}
                    <br />

                    <label htmlFor='phone'>Phone</label>
                    <input
                        id='phone'
                        type='tel'
                        name='phone'
                        placeholder='XXX-XXX-XXX'
                        value={formData.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        aria-invalid={errors.phone ? 'true' : 'false' }
                        style={{ outline: errors.phone !== '' ? '3px solid var(--error)' : undefined}}
                        autoComplete='tel'
                        required
                    />
                    {errors.phone  && <div className={styles.errorMessage} role='alert'>{errors.phone}</div>}
                    <br />

                    <label htmlFor='email'>Email (optional)</label>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={errors.email ? 'true' : 'false' }
                        style={{ outline: errors.email !== '' ? '3px solid var(--error)' : undefined}}
                        autoComplete='email'
                    />
                    {errors.email && <div className={styles.errorMessage} role='alert'>{errors.email}</div>}
                </fieldset>

                <fieldset className={styles.prefs}>
                    <legend>Reservation preferences</legend>
                    <label htmlFor='date'>Date</label>
                    <input
                        id='date'
                        type='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        aria-invalid={errors.date ? 'true' : 'false' }
                        style={{ outline: errors.date !== '' ? '3px solid var(--error)' : undefined}}
                        required
                    />
                    {errors.date && <div className={styles.errorMessage} role='alert'>{errors.date}</div>}
                    <br />

                    <label htmlFor='timePicker'>Time</label>
                        <select
                            id='timePicker'
                            name='time'
                            onChange={handleChange}
                            required
                        >
                            {timeSlots.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>

                    <fieldset>
                        <legend>Dining Area</legend>
                        <div className={styles.flex}>
                            <input
                                id='indoors'
                                type='radio'
                                name='diningArea'
                                value='indoors'
                                onChange={handleChange}
                                checked={formData.diningArea === 'indoors'}
                            />
                            <label className={styles.radioLabel} htmlFor='indoors'>Indoors</label>
                        </div>

                        <div className={styles.flex}>
                            <input
                                id='terrace'
                                type='radio'
                                name='diningArea'
                                value='terrace'
                                onChange={handleChange}
                                checked={formData.diningArea === 'terrace'}
                            />
                            <label className={styles.radioLabel} htmlFor='terrace'>Terrace</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Seating</legend>
                        <div className={styles.flex}>
                            <input
                                id='table'
                                type='radio'
                                name='seating'
                                value='table'
                                onChange={handleChange}
                                checked={formData.seating === 'table'}
                            />
                            <label className={styles.radioLabel} htmlFor='table'>Table</label>
                        </div>

                        <div className={styles.flex}>
                            <input
                                id='booth'
                                type='radio'
                                name='seating'
                                value='booth'
                                onChange={handleChange}
                                checked={formData.seating === 'booth'}
                            />
                            <label className={styles.radioLabel} htmlFor='booth'>Booth</label>
                        </div>

                        <div className={styles.flex}>
                            <input
                                id='bar'
                                type='radio'
                                name='seating'
                                value='bar'
                                onChange={handleChange}
                                checked={formData.seating === 'bar'}
                            />
                            <label className={styles.radioLabel} htmlFor='bar'>Bar</label>
                        </div>
                    </fieldset>

                    <label htmlFor='guestCount'>Number of guests</label>
                    <input
                        id='guestCount'
                        type='number'
                        name='guestCount'
                        value={formData.guestCount}
                        min={1}
                        max={12}
                        onChange={handleChange}
                        aria-invalid={errors.guestCount ? 'true' : 'false' }
                        style={{ outline: errors.guestCount !== '' ? '3px solid var(--error)' : undefined}}
                        required
                    />
                    {errors.guestCount && <div className={styles.errorMessage} role='alert'>{errors.guestCount}</div>}
                    <br />

                    <label htmlFor='occasion'>Occasion</label>
                    <select
                        id='occasion'
                        name='occasion'
                        onChange={handleChange}
                    >
                        <option value='Being Alive'>Being Alive</option>
                        <option value='Anniversary'>Anniversary</option>
                        <option value='Birthday'>Birthday</option>
                        <option value='Engagement'>Engagement</option>
                        <option value='Graduation'>Graduation</option>
                        <option value='New Job'>New Job</option>
                        <option value='Promotion'>Promotion</option>
                        <option value='Retirement'>Retirement</option>
                    </select>
                </fieldset>

                <div>
                    <label htmlFor='comment'>Additional comments (optional)</label>
                    <textarea
                        id='comment'
                        name='comment'
                        placeholder="I can't wait to eat here!"
                        value={formData.comment}
                        onChange={handleChange}
                        aria-invalid={errors.comment ? 'true' : 'false' }
                        style={{ outline: errors.comment !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='off'
                    />
                    {errors.comment && <div className={styles.errorMessage} role='alert'>{errors.comment}</div>}

                    <button
                        type='submit'
                        disabled={submitDisabled}
                        className={styles.confirmBtn}
                    >
                        Confirm reservation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;