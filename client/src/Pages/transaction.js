import React, { useState } from 'react';
import Button from '../components/Button/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Input from '../components/Input/index';
import OngCard from '../components/OngCard/index';

const Transaction = () => {
  const [form, setForm] = useState(false);
  const [data, setData] = useState({});

  const showForm = (e) => {
    e.preventDefault();
    setForm(true);
  }

  const sendTransaction = (account) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "amount": data.amount,
        "toFinancialOperationKey": data.account,
        "transferCode":"574247d0-10a8-47c9-b12b-66529d5a27a0",
        "summary":"Transferencia P2P para teste",
        "idempotencyKey":"fdce002c-43a7-49b9-8426-c5fb7f79affb"
      }),
      redirect: 'follow'
    };
          
    fetch(`https://qacst-ppi.hubprepaid.com.br/partner-interface/accounts/${account}/transfer`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

    return (
        <section>
            <Header />
            <OngCard
              image="https://www.clp.org.br/wp-content/uploads/2018/02/19619.jpg"
              name="Ong"
              createdAt="08/2020"
              email="www.ong.com.br"
              balanceAmount="5000"
            />
            <p>Nós da Vale Tech recebemos doações de empresas apoiadoras 
                e fazemos o repasse para ONG's com programas voltados a área de tecnologia. 
                Para garantir que o dinheiro doado está sendo usado para as finalidades sociais, 
                contamos com gráficos e extratos público de gastos.
            </p>
            <Button onClick={showForm} children={'Dar um Vale Tech'} />
            {form ? (
                <form>
                  <label>Valor:</label>
                  <Input onChange={(e) => setData({ ...data, amount: e.target.value})}/>
                  <label>Conta:</label>
                  <Input onChange={(e) => setData({ ...data, account: e.target.value})}/>
                  <Button onClick={sendTransaction} children={'Transferir'}/>
                </form>
            ) : null}
            <Footer />
        </section>
    )
}

export default Transaction;

// {
//     "financialOperationKey": "200002043"
// }