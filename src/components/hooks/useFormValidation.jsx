import { useState } from 'react';
import { getDate } from '../utils/timing';



const today = getDate(); // Grab "today"

const useFormValidation = (initialData) => {
    const [ formData, setFormData ] = useState(initialData);
    const [ errors, setErrors ] = useState({
        firstName: undefined,
        lastName: undefined,
        phone: undefined,
        email: '',
        date: '',
        guestCount: '',
        comment: ''
    });

    const validateField = (name, value) => {
        let newErrors = { ...errors };
        // Provide  validation logic
        switch (name) {
            case 'firstName':
                newErrors.firstName = value.length > 50 ? 'First name must be less than 50 characters.' : '';
                break
            case 'lastName':
                newErrors.lastName = value.length > 50 ? 'Last name must be less than 50 characters.' : '';
                break;
            case 'phone':
                newErrors.phone = !/^\d{3}-\d{3}-\d{4}$/.test(value) ? 'Invalid phone format. Please use XXX-XXX-XXXX.' : '';
                break;
            case 'email':
                newErrors.email = value !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format.'; // Don't register an error if optional input is blank
                break;
            case 'date':
                newErrors.date = new Date(value) < new Date(today) ? 'Reservation date cannot be in the past.' : '';
                break;
            case 'guestCount':
                if (value < 1) {
                    newErrors.guestCount = "You're a valid person too!";
                } else if (value > 12) {
                    newErrors.guestCount = 'Parties of 13 or more must make a reservation with our event coordinator. Please call 438-555-0172.';
                } else {
                    newErrors.guestCount = '';
                }
                break;
            case 'comment':
                newErrors.comment = value === '' || value.length <= 500 ? '' : "Comments must be less than 500 characters, but we'd love to hear from you in an email: guestinput@littlelemon.com."; // Don't register an error if optional input is blank
        };
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Trim white space from required inputs
        const trimmedValue = name !== 'comment' ? value.trim() : value;
        // Update form data
        setFormData(prev => ({
            ...prev,
            [name]: trimmedValue
        }));
        // Validate after updating
        validateField(name, value);
    };

    return [ formData, errors, handleChange ];
};

export default useFormValidation;