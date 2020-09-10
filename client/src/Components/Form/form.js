import React from 'react';
import Button from '../Button';
//import './form.css';

const Form = (props) => {
    return (
        <form>
            <label for="value">Valor:</label>
            <input type="text" onChange={props.onChange}></input>
            <label for="account">Conta:</label>
            <input type="text" onChange={props.onChange}></input>
            <Button onClick={props.onClick} text='Enviar'/> 
        </form>
    )
}

export default Form;