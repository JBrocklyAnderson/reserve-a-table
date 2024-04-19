import React, { useState, useEffect } from 'react';
import styles from './ReservationForm.module.css';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        diningArea: 'indoors',
        seating: 'Table',
        guestCount: 1,
        occasion: 'beingAlive',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Handle radio inputs according to their checked/unchecked state
        if (type === 'radio') {
            setFormData({
                ...formData,
                [name]: checked ? value : formData[name]
            });
        // Otherwise, update the value of each input
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        // Implement validation logic

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
            <h2>Customize your reservation with the Little Lemon restaurant</h2>
            <form className={styles.form} onSubmit={handleSumbit}>
                <fieldset className={styles.contactInfo}>
                    <legend>Contact Information</legend>
                    <label htmlFor='firstName'>First Name</label>
                    <input id='firstName' type='text' name='firstName' value={formData.firstName} onChange={handleChange} autoComplete='name' required />
                    <br />
                    <label htmlFor='lastName'>Last Name</label>
                    <input id='lastName' type='text' name='lastName' value={formData.lastName} onChange={handleChange} autoComplete='name' required />
                    <br />
                    <label htmlFor='phone'>Phone</label>
                    <input id='phone' type='tel' name='phone' value={formData.phone} pattern='([0-9]{3})-[0-9]{3}-[0-9]{4}' onChange={handleChange} autoComplete='tel' required />
                    <br />
                    <label htmlFor='email'>Email (optional)</label>
                    <input id='email' type='text' name='email' value={formData.email} onChange={handleChange} autoComplete='email' />
                </fieldset>

                <fieldset className={styles.prefs}>
                    <legend>Reservation preferences</legend>
                    <label htmlFor='date'>Date</label>
                    <input id='date' type='date' name='date' value={formData.date} onChange={handleChange} required />
                    <br />

                    <label htmlFor='timePicker'>Time</label>
                    <div>
                        <select
                            id='timePicker'
                            name='time'
                            onChange={handleChange}
                            style={{
                                maxHeight:'5rem',
                                overflowY:'auto',
                        }}
                        >
                            {timeSlots.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>

                    <fieldset>
                        <legend>Dining Area</legend>
                        <input id='indoors' type='radio' name='diningArea' value={formData.diningArea} onChange={handleChange} />
                        <label htmlFor='indoors'>Indoors</label>

                        <input id='terrace' type='radio' name='diningArea' value={formData.diningArea} onChange={handleChange} />
                        <label htmlFor='terrace'>Terrace</label>
                    </fieldset>

                    <fieldset>
                        <legend>Seating</legend>
                        <input id='table' type='radio' name='seating' value={formData.seating} onChange={handleChange} />
                        <label htmlFor='table'>Table</label>

                        <input id='booth' type='radio' name='seating' value={formData.seating} onChange={handleChange} />
                        <label htmlFor='booth'>Booth</label>

                        <input id='bar' type='radio' name='seating' value={formData.seating} onChange={handleChange} />
                        <label htmlFor='bar'>Bar</label>
                    </fieldset>

                    <label htmlFor='guestCount'>Number of guests</label>
                    <input id='guestCount' type='number' name='guestCount' value={formData.guestCount} min={1} max={12} onChange={handleChange} required />
                    <br />
                    <label htmlFor='occasion'>Occasion</label>
                    <select id='occasion' name='occasion' onChange={handleChange}>
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

                <label htmlFor='comment'>Additional comments</label>
                <textarea id='comment' name='comment' placeholder="I can't wait to eat here!" autoComplete='off'/>

                <button type='submit'></button>
            </form>
        </div>
    );
};

export default ReservationForm;