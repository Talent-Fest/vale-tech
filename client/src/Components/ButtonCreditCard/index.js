import React, { useState } from "react";
import style from "./style.module.css";

const Button = () => {
  const [creditCardButtonLabel, setcreditCardButtonLabel] = useState('Solicitar Cartão')

  const onRequestCard = () => {
    setcreditCardButtonLabel ('Cartão Solicitado')
  }

  return (
    <button
      onClick={onRequestCard}
      className={style.button}
      disabled={creditCardButtonLabel==='Cartão Solicitado'}
    >
      {creditCardButtonLabel}
    </button>
  );
};

export default Button;
