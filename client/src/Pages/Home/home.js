import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PieChart from '../../Components/PieChart';
import ImgWomanCode from '../../img/home.png';
import LogoOng from '../../img/patinho.jpg';
import style from './style.module.css';

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

const Home = () => {
    const [top5Data, setTop5Data] = useState([]);

    useEffect(() => {
        fetch('./top3.json')
            .then((response) => response.json())
            .then(data => setTop5Data(data))
    }, [top5Data, setTop5Data])

    return (
        <>
            <section className={style.section}>
                <Header />
                <main className={style.main}>
                    <img className={style.logoHome} src={ImgWomanCode} alt="mulher no computador escrevendo código" />
                    <p className={style.aboutUs}>
                        Nós da Vale Tech recebemos doações de empresas apoiadoras e fazemos o repasse para ONG's com
                        programas voltados a área de tecnologia. Para garantir que o dinheiro doado está sendo usado
                        para as finalidades sociais, contamos com gráficos e extratos público de gastos.
                    </p>
                    <div className={style.allOngs}>
                        <p className={style.seeMoreOng}>Ver todas as ONGS</p>
                        <div className={style.boxOng}>
                            <img className={style.ong} src={LogoOng} alt="imagem de um patinho fofo" />
                            <img className={style.ong} src={LogoOng} alt="imagem de um patinho fofo" />
                            <img className={style.ong} src={LogoOng} alt="imagem de um patinho fofo" />
                            <img className={style.ong} src={LogoOng} alt="imagem de um patinho fofo" />
                            <img className={style.ong} src={LogoOng} alt="imagem de um patinho fofo" />
                        </div>
                    </div>
                    <div>
                        <PieChart
                            data={createTop5Data(top5Data)}
                            title="Mais apoiam"
                        />
                    </div>
                    <p className={style.ourMission}>
                        nossa missão é ajudar ongs e instituições sem fins lucrativos a receberem apoio financeiro.
                    </p>
                </main>
            </section>
            <Footer />
        </>
    )
}

export default Home;