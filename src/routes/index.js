import React from 'react';
import PathConstants from './pathConstants';

// Lazy load components to enable code-splitting
const Home = React.lazy(() => import('../components/home/Home'));
const About = React.lazy(() => import('../components/about/About'));
const ReservationForm = React.lazy(() => import('../components/reservationForm/ReservationForm'));
const ReservationConfirmed = React.lazy(() => import('../components/reservationConfirmed/ReservationConfirmed'));

const routes = [
    {
        path: PathConstants.HOME,
        element: <Home />,
    },
    {
        path: PathConstants.OUR_STORY,
        element: <About />,
    },
    {
        path: PathConstants.RESERVE_A_TABLE,
        element: <ReservationForm />,
    },
    {
        path: PathConstants.RESERVATION_CONFIRMED,
        element: <ReservationConfirmed />,
    },
];

export default routes;