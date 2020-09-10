import React from "react";
import style from "./style.module.css";


const BalanceTable = () => {


  return (
    <section className={style.containerTable}>
        <h2 className={style.titleTable}>Extrato de Gastos</h2>
        <table>
          <tr>
            <td>{}</td>
            <td>Savings</td>
            <td>Savings</td>
          </tr>
          <tr>
            <td>Month</td>
            <td>Savings</td>
            <td>Savings</td>
          </tr>
        </table>
    </section>
  );
}

export default BalanceTable;