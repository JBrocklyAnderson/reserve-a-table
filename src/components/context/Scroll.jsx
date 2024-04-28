import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Create a component that handles scrolling functionality
const Scroll = () => {
    // Hook into the location object provided by React Router to attain the path
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location]); // Every time the path changes, scroll to the top of the page

    return null; // Render nothing to the DOM
};

export default Scroll;