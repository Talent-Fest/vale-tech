import React, { useState } from 'react';
import Button from '../Components/Button/index';
import Header from '../Components/Header/index';
import Footer from '../Components/Footer/index';
import Input from '../Components/Input/index';

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
        "transferCode": "574247d0-10a8-47c9-b12b-66529d5a27a0",
        "summary": "Transferencia P2P para teste",
        "idempotencyKey": "fdce002c-43a7-49b9-8426-c5fb7f79affb"
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
      <Header signout="ok" />
      <div>Componente de ONG</div>
      <p>Nós da Vale Tech recebemos doações de empresas apoiadoras
      e fazemos o repasse para ONG's com programas voltados a área de tecnologia.
      Para garantir que o dinheiro doado está sendo usado para as finalidades sociais,
      contamos com gráficos e extratos público de gastos.
            </p>
      <Button onClick={showForm} text='Fazer Doação' />
      {form ? (
        <form>
          <label>Valor:</label>
          <Input onChange={(e) => setData({ ...data, amount: e.target.value })} />
          <label>Conta:</label>
          <Input onChange={(e) => setData({ ...data, account: e.target.value })} />
          <Button onClick={sendTransaction} />
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