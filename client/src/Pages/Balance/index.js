import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import OngCard from '../../Components/OngCard';
import PieChart from '../../Components/PieChart';
import BarChart from '../../Components/BarChart';
import ButtonCreditCard from '../../Components/ButtonCreditCard';
import Img from '../../img/ong.png';
import style from './style.module.css';
import BalanceTable from '../../Components/BalanceTable';

const createdBarData = (bar) => {
  const labels = bar.map((item) => item.label)
  const data = bar.map((item) => item.amount)

  const dataBar = {
    labels,
    datasets: [
      {
        label: 'Arrecadados x Gastos',
        backgroundColor: 'rgb(213,131,31)',
        borderColor: 'rgba(255,243,254)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(234,245,255)',
        hoverBorderColor: 'rgba(234,245,255)',
        data
      }
    ]
  }
  return dataBar;
};


const createTop5Data = (top5) => {
  const labels = top5.map((item) => item.name)
  const data = top5.map((item) => item.amount)

  const dataPie = {
    labels,
    datasets: [{
      data,
      backgroundColor: [
        '#553766',
        '#e7357d',
        '#ec6929',
        '#f7a931',
        '#3F73DD',
      ],
      hoverBackgroundColor: [
        '#7F5398',
        '#FB5598',
        '#F57E43',
        '#FEC368',
        '#6494F3',
      ]
    }]
  };
  return dataPie;
}

const Balance = () => {
  const [top5Data, setTop5Data] = useState([]);
  const [aquesitionData, setAquesitionData] = useState([])
  const [barData, setBarData] = useState([])

  useEffect(() => {
    fetch('./top5.json')
      .then((response) => response.json())
      .then(data => setTop5Data(data))
  }, [top5Data, setTop5Data])

  useEffect(() => {
    fetch('./acquisition.json')
      .then((response) => response.json())
      .then(data => setAquesitionData(data))
  }, [aquesitionData, setAquesitionData])

  useEffect(() => {
    fetch('./bar.json')
      .then((response) => response.json())
      .then(data => setBarData(data))
  }, [barData, setBarData])

  return (
    <div className={style.app}>
      <Header signout="ok" />
      <OngCard
        image="https://www.clp.org.br/wp-content/uploads/2018/02/19619.jpg"
        name="Ong"
        createdAt="08/2020"
        email="www.ong.com.br"
        balanceAmount="5000"
      />
      <div
        className={style.buttonCard}
      >
        <ButtonCreditCard />
      </div>
      <PieChart
        data={createTop5Data(top5Data)}
        title="As 5 Empresas que mais apoiam"
      />
      <BarChart
        data={createdBarData(barData)}
        title="Arrecadados x Gastos"
      />
      <BalanceTable
        data={aquesitionData}
      />
      <img src={Img} alt="img" className={style.imgOng} />
      <Footer />
    </div>
  );
}

export default Balance;