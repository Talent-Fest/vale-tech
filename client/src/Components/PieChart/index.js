import React from 'react';
import {Pie} from 'react-chartjs-2';
import style from './style.module.css';

const PieChart = (props) => {
	return(
		<section className={style.pieChart}>
			<h1 className={style.titlePie}>{props.title}</h1>
			<Pie 
				data={props.data} 
				options={{
					legend: {
						display: true,
						labels: {
							fontSize: 10,
							boxWidth:10
						}
					}
				}}
			/>
		</section>
	)
}
export default PieChart;
