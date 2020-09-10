import React from 'react';
import style from './style.module.css';

const Footer = () => {

    return (
        <footer className={style.footerInfo}>
            <p className={style.footerItem}>QUEM SOMOS</p>
            <p className={style.footerItem}>PARCEIROS</p>
            <p className={style.footerItem}>PORQUE APOIAR</p>
        </footer>
    );
}

export default Footer;