import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import OngCard from '../../Components/OngCard';
import PieChart from '../../Components/PieChart';
import BarChart from '../../Components/BarChart';
import ButtonCreditCard from '../../Components/ButtonCreditCard';
import Img from '../../img/ong.png';
import style from './style.module.css'



const dataBar = {
  labels: ['Gastos', 'Arrecadação'],
  datasets: [
    {
      label: 'Gráfico de consum',
      backgroundColor: 'rgba(200,233,234)',
      borderColor: 'rgba(255,243,254)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(234,245,255)',
      hoverBorderColor: 'rgba(234,245,255)',
      data: [40, 30]
    }
  ]
};

const createTop5Data = (top5) => {
  const labels = top5.map((item) => item.name)
  const data = top5.map((item) => item.amount)

  const dataPie = {
    labels,
    datasets: [{
      data,
      backgroundColor: [
      '#96CCE5',
      '#ACD29A',
      '#D58881',
      '#FFB258',
      '#819FDA',
      ],
      hoverBackgroundColor: [
      '#AFDFF5',
      '#CCF1BB',
      '#F3A29B',
      '#FCD09C',
      '#A9C3F6',
      ]
    }]
  };
  return dataPie;
}

const Balance= () => {
  const [top5Data, setTop5Data] = useState([]);
  const [aquesitionData, setAquesitionData] = useState([])

  useEffect(() => {
    fetch('./top5.json')
    .then((response) =>  response.json())
    .then(data => setTop5Data(data))
  }, [top5Data, setTop5Data])
  
  useEffect(() => {
    fetch('./acquisition.json')
    .then((response) =>  response.json())
    .then(data => setAquesitionData(data))
  }, [aquesitionData, setAquesitionData])
  
  return (
    <div className="App">
      <Header/>
      <OngCard
        image="https://www.clp.org.br/wp-content/uploads/2018/02/19619.jpg"
        name="Ong"
        createdAt="08/2020"
        email="www.ong.com.br"
        balanceAmount="5000"
      />
      <ButtonCreditCard>Solicitar Cartão</ButtonCreditCard>
      <PieChart
      data={createTop5Data(top5Data)}
      title="As 5 Empresas que mais apoiam"
      />
      <BarChart
      data={dataBar}
      />
      <img src={Img} alt="img" className={style.imgOng} />
      <Footer/>
    </div>
  );
}

export default Balance;