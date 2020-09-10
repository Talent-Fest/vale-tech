import React from 'react';
import style from './style.module.css';
import Logo from '../../img/logoValeTech.png';
import ButtonOut from '../ButtonOut';

const Header = () => {

    return (
        <header className={style.headerWrapper}>
            <figure className={style.logoHeader}>
                <img src={Logo} alt="logo" />
            </figure>
            <ButtonOut/>
        </header>
    );
}

export default Header;