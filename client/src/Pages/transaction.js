import React, { useState } from 'react';
import Button from '../components/Button/index';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Form from '../components/Form/form';

const Transaction = () => {
  const [form, setForm] = useState(false);
  const [data, setData] = useState({});
  //const [body, setBody] = useState({});

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
        "amount": data,
        "toFinancialOperationKey":"200002043",
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
            <div>Componente de ONG</div>
            <p>Nós da Vale Tech recebemos doações de empresas apoiadoras 
                e fazemos o repasse para ONG's com programas voltados a área de tecnologia. 
                Para garantir que o dinheiro doado está sendo usado para as finalidades sociais, 
                contamos com gráficos e extratos público de gastos.
            </p>
            <Button onClick={showForm}>Fazer Doação</Button>
            {form ? (
                <Form onClick={sendTransaction} onChange={(e) => setData(e.target.value)}/>
            ) : null}
            <Footer />
        </section>
    )
}

export default Transaction;

// {
//     "financialOperationKey": "200002043"
// }