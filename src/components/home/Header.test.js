import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Router } from 'react-router-dom';
import Header from './Header';


describe('Header', () => {
    test('Header mounts successfully', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(getByText(/Little Lemon/i)).toBeInTheDocument();
    });
    /* test('Header image is pulled from the correct file path', () => {
        const getByAltText = render(<Header />);
        const headerImg = getByAltText(/The Little Lemon sign/i);
        expect(headerImg.src).toContain('/postcompress/HeaderImg-min.jpg')
    });
    test('The reserve a table button functions as expected', () => {
        const { getByText, history } = render(
            <Router>
                <Header />
            </Router>
        );
        const reservationLink = getByText('Reserve a table');
        expect(reservationLink.getAttribute('href')).toBe('/reserve-a-table');
        // userEvent.click(reservationLink);
        // expect(history.location.pathname).toBe('/reserve-a-table');
    }); */
});