import React from "react";
import style from "./style.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      id={props.id}
      className={style.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
