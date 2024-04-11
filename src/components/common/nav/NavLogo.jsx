import React from 'react';
import Logo from '../../../assets/images/svg/Logo.svg';
import { Link } from 'react-router-dom';

const NavLogo = () => {
    return (
        <Link to='/'>
            <img src={Logo} alt='Little Lemon Logo' />
        </Link>
    );
};

export default NavLogo;