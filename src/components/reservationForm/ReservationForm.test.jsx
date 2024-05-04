import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../../App';

const generateCharacterString = (number) => {
    let result = '';
    for (let i = 1; i <= number; i++) {
        result += 'a';
    };
    return result;
};

// Mock reservation confirmation component
jest.mock('../reservationConfirmed/ReservationConfirmed', () => {
    return {
        __esModule: true,
        default: () => <div>Confirmation Component</div>
    };
});

describe('form, validation, and confirmation integration', () => {
    beforeEach(() => {
        render(<App />);
        // Navigate to the form
        const reservationFormLink = screen.getByRole('link', { name: /reservations/i });
        userEvent.click(reservationFormLink);
    });

    // Test the emergence of error messages with invalid input
    test('displays error message for invalid first name input', async () => {
        const input = await screen.findByLabelText(/first name/i);
        userEvent.type(input, generateCharacterString(51));
        expect(screen.getByText(/first name must be less than 50 characters./i)).toBeInTheDocument();
    });

    test('displays error message for invalid last name input', async () => {
        const input = await screen.findByLabelText(/last name/i);
        userEvent.type(input, generateCharacterString(51));
        expect(screen.getByText(/last name must be less than 50 characters./i)).toBeInTheDocument();
    });

    test('displays error message for invalid phone number', async () => {
        const input = await screen.findByLabelText(/phone/i);
        userEvent.type(input, '(555)-555-5550');
        expect(screen.getByText(/invalid phone format. Please use XXX-XXX-XXXX./i)).toBeInTheDocument();
    });

    test('displays error message for invalid email', async () => {
        const input = await screen.findByLabelText(/email/i);
        userEvent.type(input, 'not_an_email');
        expect(screen.getByText(/invalid email format./i)).toBeInTheDocument();
    });

    test('displays error message for invalid comment', async () => {
        const input = await screen.findByLabelText(/additional comments/i);
        userEvent.type(input, generateCharacterString(501));
        expect(screen.getByText(/comments must be less than 500 characters, but we'd love to hear from you in an email: guestinput@littlelemon.com./i)).toBeInTheDocument();
    });

    // Test non-textual fields
    test('displays error message for invalid date', async () => {
        const input = await screen.findByLabelText(/date/i);
        const date = new Date();
        date.setDate(date.getDate() - 2);
        const pastDate = date.toISOString().slice(0, 10);
        console.log(pastDate);
        userEvent.type(input, pastDate);
        expect(screen.getByText(/reservation date cannot be in the past/i)).toBeInTheDocument();
    });

    test('displays error message for invalid guest count', async () => {
        const input = await screen.findByLabelText(/number of guests/i);
        userEvent.type(input, '13');
        expect(screen.getByText(/parties of 13 or more must make a reservation with our event coordinator. Please call 438-555-0172./i)).toBeInTheDocument();
    });

    test('integration between form and confirmation component', async () => {
        const firstName = await screen.findByLabelText(/first name/i);
        const lastName = await screen.findByLabelText(/last name/i);
        const phone = await screen.findByLabelText(/phone/i);

        const calendar = await screen.findByLabelText(/date/i);
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const futureDate = date.toISOString().slice(0, 10);

        const guestCount = await screen.findByLabelText(/number of guests/i);
        const submit = await screen.getByRole('button', { name: /confirm reservation/i });

        userEvent.type(firstName, 'John');
        userEvent.type(lastName, 'Doe');
        userEvent.type(phone, '555-555-5555');
        userEvent.type(calendar, futureDate);
        userEvent.type(guestCount, '8');
        screen.debug();
        userEvent.click(submit);

        const confirmationComponent = await screen.findByText(/confirmation component/i);
        expect(confirmationComponent).toBeInTheDocument();
    });
});