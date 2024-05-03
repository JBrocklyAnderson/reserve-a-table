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

// Test navigation from the navigation bar
describe('Navigation bar routing', () => {
    test('finds the <Home /> element when the app is rendered', async () => {
        render(<App />);
        await waitFor(() => expect(screen.getByText(/home component/i)).toBeInTheDocument());
    });

    test('navbar link navigates to "/" and renders the correct component', async () => {
        render(<App />); // Render anew too avoid carrying over navigation history
        const homeLink = screen.getByRole('link', { name: /home/i });
        userEvent.click(homeLink);
        await waitFor(() => expect(screen.getByText(/home component/i)).toBeInTheDocument());
    });

    test('navbar link navigates to "/our-story" and renders the correct component', async () => {
        render(<App />);
        const aboutLink = screen.getByRole('link', { name: /about/i });
        userEvent.click(aboutLink);
        await waitFor(() => expect(screen.getByText(/about component/i)).toBeInTheDocument());
    });

    test('menu link triggers a browser alert', async () => {
        window.alert = jest.fn(); // Mock the alert function
        render(<App />);
        const menuLink = screen.getByTestId('menuLink');
        userEvent.click(menuLink);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith('This page is coming soon!'));
    });

    test('navbar link navigates to "/reserve-a-table" and renders the correct component', async () => {
        render(<App />);
        const reservationFormLink = screen.getByRole('link', { name: /reservations/i });
        userEvent.click(reservationFormLink);
        await waitFor(() => expect(screen.getByText(/form component/i)).toBeInTheDocument());
    });
});

// Test navigation from the footer
describe('Footer routing', () => {
    test('newsletter sign-up button triggers a browser alert on submit', async () => {
        window.alert = jest.fn();
        render(<App />);
        const signUpButton = screen.getByRole('button', { name: /sign up!/i });
        userEvent.click(signUpButton);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith('This page is coming soon!'));
    });

    test('footer link navigates to "/reserve-a-table" and renders the correct component', async () => {
        render(<App />);
        const reservationFormLink = screen.getByRole('link', { name: /reserve a table/i });
        userEvent.click(reservationFormLink);
        await waitFor(() => expect(screen.getByText(/form component/i)).toBeInTheDocument());
    });

    test('footer link navigates to "/our-story" and renders the correct component', async () => {
        render(<App />);
        const aboutLink = screen.getByRole('link', { name: /about/i });
        userEvent.click(aboutLink);
        await waitFor(() => expect(screen.getByText(/about component/i)).toBeInTheDocument());
    });
});