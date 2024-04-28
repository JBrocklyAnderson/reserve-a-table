// Grab today
export const getDate = () => {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localISOTime = new Date(today.getTime() - offset).toISOString();
    return localISOTime.slice(0, 10); // Format as 'YYYY-MM-DD'
};

// Create a pseudorandom number generator
const seedThisRandomly = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
};

// Generate a timeslot array
export const genTimeSlots = (startHour, endHour, date) => {
    const slots = [];
    let random = seedThisRandomly(date.getDate());

    // Increment by one hour between given hours
    for (let hour = startHour; hour <= endHour; hour++) {
        // Increment by 15 minutes within each hour
        for (let minutes = 0; minutes < 60; minutes += 15) {
            if (random() < 0.5) { // Replicate the nonexistence of certain time slots due to reservations made by others
                const time = `${hour}:${minutes.toString().padStart(2, '0')}`;
                slots.push(time);
            }
            /* const time = `${hour > 12 ? hour - 12 : hour}:${minutes.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
            slots.push(time); // Add each time slot to the array */
        }
    }
    return slots;
};

