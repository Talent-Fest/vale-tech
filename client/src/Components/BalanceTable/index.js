import React from "./node_modules/react";
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
        <table>
          {props.data.map((item, index)=>(
            <tr key={item.description} className={lineClass(index)}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>R$ {item.amount}</td>
            </tr>
          ))}
        </table>
    </section>
  );
}

export default BalanceTable;