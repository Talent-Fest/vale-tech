import React from 'react';
import './header.css';
import Logo from '../../img/logoValeTech.png';

const Header = () => {

    return (
        <header className='header-wrapper'>
            <figure className='logo-header'>
                <img src={Logo} />
            </figure>
        </header>
    );
}

export default Header;