import React from 'react';
import {Bar} from 'react-chartjs-2';
import style from './style.module.css'

const BarChart = (props) => {
  return (
    <section className={style.chartBar}>
      <div className={style.barChart}>
      <Bar 
    data={props.data}
    options={{
      maintainAspectRatio: false
    }}
    />
      </div>
    </section>
  )
}

export default BarChart;