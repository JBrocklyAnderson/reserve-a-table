// Use form data to craft a custom success message
export const successMessage = (formData) => {
    // Destructure form data
    const { firstName, lastName, date, time, diningArea, seating, guestCount, occasion, } = formData;
    // Handle pluralization
    const guests = guestCount === 1 ? `${guestCount} guest` : `${guestCount} guests`;
    // Handle occasion messaging
    let occasionMessage = '';
    switch (occasion) {
        case 'Being Alive':
            occasionMessage = "Cheers to being alive!";
            break;
        case 'Anniversary':
            occasionMessage = 'Happy anniversary you two!';
            break;
        case 'Birthday':
            occasionMessage = 'Happy birthday!';
            break;
        case 'Engagement':
            occasionMessage = 'Congratulations on the wedding!';
            break;
        case 'Graduation':
            occasionMessage = "Here's to a bright future, Graduate!";
            break;
        case 'New Job':
            occasionMessage = 'Congratulations on the dream job!';
            break;
        case 'Promotion':
            occasionMessage = 'Congratulations on the promotion, your hard work has not gone unnoticed!';
            break;
        case 'Retirement':
            occasionMessage = 'Welcome to the best years of your life!';
            break;
    };

    return `Congratulations ${firstName} ${lastName}, you have successfully reserved a ${diningArea} ${seating} at the Little Lemon restaurant for ${guests} at ${time} on ${date}! ${occasionMessage}`;
};