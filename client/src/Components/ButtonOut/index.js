import React from "react";
import style from "./style.module.css";

const LogoOut = () => {
  return (
    <a href="/logout" className={style.logout}>
      SAIR
    </a>
  );
};

export default LogoOut;