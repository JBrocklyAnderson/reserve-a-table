import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

// Mock lazy-loading components
jest.mock('../components/home/Home', () => {
    return {
        __esModule: true,
        default: () => <div>Home Component</div>
    };
});
jest.mock('../components/about/About', () => {
    return {
        __esModule: true,
        default: () => <div>About Component</div>
    };
});
jest.mock('../components/reservationForm/ReservationForm', () => {
    return {
        __esModule: true,
        default: () => <div>Form Component</div>
    };
});

/* Organize tests */
describe('Routing layer', () => {
    test('finds the <Home /> element when the app is rendered', async () => {
        render(<App />);
        await waitFor(() => expect(screen.getByText(/home component/i)).toBeInTheDocument());
    });

    test('navigates to "/" and renders the correct component', async () => {
        render(<App />); // Render anew too avoid carrying over navigation history
        const homeLink = screen.getByRole('link', { name: /Home/i });
        userEvent.click(homeLink);
        await waitFor(() => expect(screen.getByText(/home component/i)).toBeInTheDocument());
    });

    test('navigates to "/our-story" and renders the correct component', async () => {
        render(<App />);
        const aboutLink = screen.getByRole('link', { name: /About/i });
        userEvent.click(aboutLink);
        await waitFor(() => expect(screen.getByText(/about component/i)).toBeInTheDocument());
    });

    test('navigates to "/reserve-a-table" and renders the correct component', async () => {
        render(<App />);
        const reservationFormLink = screen.getByRole('link', { name: /Reservations/i });
        userEvent.click(reservationFormLink);
        await waitFor(() => expect(screen.getByText(/form component/i)).toBeInTheDocument());
    });
});