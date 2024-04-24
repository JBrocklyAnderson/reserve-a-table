import React, { useState, useEffect, useRef } from 'react';
import styles from './ReservationForm.module.css';

const ReservationForm = () => {
    // Retrieve today's date
    const today = new Date();
    const year = today.getFullYear();
    const month = (`0${today.getMonth() + 1}`).slice(-2); // Ensure a two-digit month numeral
    const day = (`0${today.getDate()}`).slice(-2); // Ensure a two-digit day numeral
    const currentDate = `${year}-${month}-${day}`; // Concatenate the variables to ensure today will always be represented as YYYY-MM-DD

    // Track each of the inputs and their potential errors with state management
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: currentDate,
        time: '',
        diningArea: 'indoors',
        seating: 'table',
        guestCount: 1,
        occasion: 'beingAlive',
        comment: '',
        errors: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            guestCount: '',
            comment: ''
        }
    });

    // Track whether submission is disabled
    const [submitDisabled, setSubmitDisabled] = useState(true); // Initially disabled

    // Grab a reference to the input element for debouncing
    const debounceTimeoutRef = useRef(null);

    const handleChange = (e) => {
        // Grab a destructured list of the input's properties
        const { name, value } = e.target;

        // Clear any existing debounce timeout to reset the debounce timer
        clearTimeout(debounceTimeoutRef.current);

        /* // Grab updated values from user input
        const updatedValue = type === 'radio' ? (checked ? value : formData[name]) : value; */
        // Trim white space from inputs
        const trimmedValue = name !== 'comment' ? value.trim() : value;
        // Update state with new values before validation to prevent error styling from appearing immediately
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: trimmedValue
        }));

        // Set up a new debounce timeout with error validation logic
        debounceTimeoutRef.current = setTimeout(() => {
            let newErrors = {...formData.errors}; // Never change state directly
            let isValid = true;

            // Provide immediate validation logic
            switch (name) {
                case 'firstName':
                    newErrors.firstName = value.length > 50 || value.length < 2 ? 'First name must be less than 50 characters.' : '';
                    break
                case 'lastName':
                    newErrors.lastName = value.length > 50 || value.length < 2 ? 'Last name must be less than 50 characters.' : '';
                    break;
                case 'phone':
                    newErrors.phone = /^\d{3}-\d{3}-\d{4}$/.test(value) ? '' : 'Invalid phone format. Please use XXX-XXX-XXXX.';
                    break;
                case 'email':
                    newErrors.email = value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format.'; // Don't register an error if optional input is blank
                    break;
                case 'guestCount':
                    newErrors.guestCount = value >= 1 && value <= 12 ? '' : 'Parties of 13 or more must make a reservation with our event coordinator. Please call 438-555-0172.';
                    break;
                case 'comment':
                    newErrors.comment = value === '' || value.length <= 500 ? '' : "Comments must be less than 500 characters, but we'd love to hear from you in an email: guestinput@littlelemon.com."; // Don't register an error if optional input is blank
            };

            // Determine if any new error has emerged
            isValid = !Object.values(newErrors).some(error => error !== '');

            // Update state with new errors (if any)
            setFormData(prevFormData => ({
                ...prevFormData,
                errors: newErrors
            }));

            // Enable or disable submit button based on error status
            setSubmitDisabled(!isValid);
        }, 1000); // 1000 millisecond delay
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    // Generate a timeslot array
    const genTimeSlots = (startHour, endHour) => {
        const slots = [];

        // Increment by one hour between given hours
        for (let hour = startHour; hour <= endHour; hour++) {
            // Increment by 15 minutes within each hour
            for (let minutes = 0; minutes < 60; minutes += 30) {
                const time = `${hour > 12 ? hour - 12 : hour}:${minutes.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
                slots.push(time); // Add each time slot to the array
            }
        }
        return slots;
    };

    // Create a timeslot for Little Lemon's dinner hours
    const timeSlots = genTimeSlots(17, 20);

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
                        onChange={handleChange}
                        style={{ outline: formData.errors.firstName !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='name'
                        required
                    />
                    {formData.errors.firstName && <div className={styles.errorMessage}>{formData.errors.firstName}</div>}
                    <br />

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        max={50}
                        onChange={handleChange}
                        style={{ outline: formData.errors.lastName !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='name'
                        required
                    />
                    {formData.errors.lastName && <div className={styles.errorMessage}>{formData.errors.lastName}</div>}
                    <br />

                    <label htmlFor='phone'>Phone</label>
                    <input
                        id='phone'
                        type='tel'
                        name='phone'
                        placeholder='XXX-XXX-XXX'
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ outline: formData.errors.phone !== '' ? '3px solid var(--error)' : undefined}}
                        autoComplete='tel'
                        required
                    />
                    {formData.errors.phone  && <div className={styles.errorMessage}>{formData.errors.phone}</div>}
                    <br />

                    <label htmlFor='email'>Email (optional)</label>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        style={{ outline: formData.errors.email !== '' ? '3px solid var(--error)' : undefined}}
                        autoComplete='email'
                    />
                    {formData.errors.email && <div className={styles.errorMessage}>{formData.errors.email}</div>}
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
                        required
                    />
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
                            <label htmlFor='indoors'>Indoors</label>
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
                            <label htmlFor='terrace'>Terrace</label>
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
                            <label htmlFor='table'>Table</label>
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
                            <label htmlFor='booth'>Booth</label>
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
                            <label htmlFor='bar'>Bar</label>
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
                        style={{ outline: formData.errors.guestCount !== '' ? '3px solid var(--error)' : undefined}}
                        required
                    />
                    {formData.errors.guestCount && <div className={styles.errorMessage}>{formData.errors.guestCount}</div>}
                    <br />

                    <label htmlFor='occasion'>Occasion</label>
                    <select
                        id='occasion'
                        name='occasion'
                        onChange={handleChange}
                    >
                        <option value='beingAlive'>Being Alive</option>
                        <option value='anniversary'>Anniversary</option>
                        <option value='birthday'>Birthday</option>
                        <option value='Engagement'>Engagement</option>
                        <option value='Graduation'>Graduation</option>
                        <option value='newJob'>New Job</option>
                        <option value='promotion'>Promotion</option>
                        <option value='retirement'>Retirement</option>
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
                        style={{ outline: formData.errors.comment !== '' ? '3px solid var(--error)' : undefined }}
                        autoComplete='off'
                    />
                    {formData.errors.comment && <div className={styles.errorMessage}>{formData.errors.comment}</div>}

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