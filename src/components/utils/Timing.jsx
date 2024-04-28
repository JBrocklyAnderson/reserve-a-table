// Grab today
export const getDate = () => {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localISOTime = new Date(today.getTime() - offset).toISOString();
    return localISOTime.slice(0, 10); // Format as 'YYYY-MM-DD'
};

// Generate a timeslot array
export const genTimeSlots = (startHour, endHour) => {
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

