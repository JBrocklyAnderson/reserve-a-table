import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../../App';

describe('Form, validation, and confirmation integration', () => {
    beforeEach(() => {
        render(<App />);
        // Navigate to the form
        const reservationFormLink = screen.getByRole('link', { name: /reservations/i });
        userEvent.click(reservationFormLink);
    });
    // Test the emergence of error messages with invalid entry
    test('displays error message for first name input', async () => {
        const input = await screen.findByLabelText(/first name/i);
        act(() => {
            userEvent.type(input, 'this string of characters exceeds the maximum length of the first name input');
            fireEvent.blur(input);
        });
        await waitFor(() => {
            expect(screen.getByText(/First name must be less than 50 characters./i)).toBeInTheDocument();
        });
    });
});