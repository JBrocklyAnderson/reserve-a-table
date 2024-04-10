import React from 'react';
import Logo from '../../assets/images/svg/Logo.svg';
import { Link } from 'react-router-dom';

export const placeholderLinkAlert = (e) => {
    e.preventDefault();
    alert('This page is coming soon!');
};

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        <img src={Logo} alt='Little Lemon Logo' />
                    </Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/our-story'>About</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/reserve-a-table'>Reservations</Link>
                </li>
                <li>
                    <Link to='/order-online' onClick={placeholderLinkAlert}>Order Online</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;