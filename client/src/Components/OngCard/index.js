import React from "react";
import style from "./style.module.css";

const OngCard = (props) => {

  return (
    <section className={style.containerOngCard}>
      <img src={props.image} className={style.image} alt={props.name} />
      <section className={style.cardData}>
        <h1 className={style.nameOng}>{props.name}</h1>
        <span>Desde de {props.createdAt}</span>
        <span>{props.email}</span>
        <span>Saldo em conta: R$ {props.balanceAmount}</span>
      </section>

    </section>
  );
}

export default OngCard;