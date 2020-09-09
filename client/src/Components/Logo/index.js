import React from 'react';
import Logo from 'img/logoValeTech.png';
import './logo.css';


const Logo = (props) => {
    return (
        <div className={props.className}>
            <img src={Logo} />
        </div>

    );
}

export default Logo;