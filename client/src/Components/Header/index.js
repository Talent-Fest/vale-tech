import React from 'react';
import style from './style.module.css';
import Logo from '../../img/logoValeTech.png';
import Button from '../../Components/Button/index';
import { Link, withRouter } from 'react-router-dom';
import ButtonOut from '../ButtonOut';

const Header = (props) => {

    return (
        <header className={style.headerWrapper}>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <div className={style.buttons}>
                {
                    props.signout &&
                    <Link to="/">
                        <ButtonOut />
                    </Link>
                }
                {
                    props.register &&
                    <Link to="/account">
                        <Button className={style.btnRegister}>Cadastre-se</Button>
                    </Link>
                }
                {
                    props.login &&
                    <Link to="/balance">
                        <Button className={style.btnLogin}>Entrar</Button>
                    </Link>
                }
            </div>
        </header>
    );
}

const connectedWithRouter = withRouter(Header);
export default connectedWithRouter;