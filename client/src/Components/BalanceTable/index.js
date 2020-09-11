import React from 'react';
import style from "./style.module.css";

const lineClass = (index) =>{
  if(index % 2===0) {
    return style.lineEven
  }
  return style.lineOdd

}
const BalanceTable = (props) => {


  return (
    <section className={style.containerTable}>
        <h2 className={style.titleTable}>Extrato de Gastos</h2>
        <table className={style.table}>
          {props.data.map((item, index)=>(
            <tr key={item.description} className={lineClass(index)}>
              <td className={style.description}>{item.description}</td>
              <td className={style.date}>{item.date}</td>
              <td className={style.amount}>R$ {item.amount}</td>
            </tr>
          ))}
        </table>
    </section>
  );
}

export default BalanceTable;