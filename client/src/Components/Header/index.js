import React from 'react';
import style from './style.module.css';
import Logo from '../../img/logoValeTech.png';
import ButtonOut from '../ButtonOut';

const Header = (props) => {

    return (
        <header className={style.headerWrapper}>
            <figure className={style.logoHeader}>
                <img src={Logo} alt="logo" />
            </figure>
            {
                props.signout &&
                <ButtonOut />
            }
            {
                props.login &&
                'logar'
            }
        </header>
    );
}

export default Header;