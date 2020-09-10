import React, { useState } from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Button from '../../Components/Button';
import Input from '../../Components/Input/index';
import Logo from '../../img/logoValeTech.png';
import './account.css';
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';

const Account = () => {

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  //const [fundacao, setFundacao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  //const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const cadastrar = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer' },
      body: JSON.stringify({
        idempotencyKey: "d245a861-247b-439a-8be9-7b0bd7429099",
        properties: "sdfwerhrebgh",
        owner: {
          type: "PJ",
          companyName: name,
          email: email,
          address: {
            street: endereco,
            number: numero,
            district: bairro,
            city: cidade,
            state: estado,
            zipcode: cep
          },
          identifierDocument: {
            document: cnpj,
            type: "CNPJ"
          },
          documents: [
            {
              type: "CNPJ",
              document: "00270965000102"
            }
          ]
        }
      })
    };

    fetch('http://localhost:5001/valetech-5ea35/us-central1/api', requestOptions)
      .then(response => response.json())
      .catch((erro) => growl({ text: erro, type: 'warning', fadeAway: true, fadeAwayTimeout: 2000 }))
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <figure className='logo-form'>
          <img src={Logo} alt='' />
        </figure>
        <div className='text-info'>
          <p>Aqui você se cadastra para receber apoio financeiro das empresas parceiras.
          Se atente aos termos de uso e preencha os dados corretamente.</p>
        </div>

        <div className='form-register'>
          <div className='div-register'>
            <label for='name'>NOME</label>
            <Input onChange={(e) => setName(e.target.value)} className='input-register' id='name' type='text' />
          </div>
          <div className='div-register'>
            <label for='cnpj'>CNPJ</label>
            <Input onChange={(e) => setCnpj(e.target.value)} className='input-register' id='cnpj' type='text' />
          </div>
          <div className='div-register'>
            <label for='data-fundacao'>DATA DE FUNDAÇÃO</label>
            <Input className='input-register' id='data-fundacao' type='text' />
          </div>
          <div className='div-register'>
            <label for='endereco'>ENDEREÇO</label>
            <Input onChange={(e) => setEndereco(e.target.value)} className='input-register' id='endereco' type='text' />
          </div>
          <div className='div-register'>
            <label for='numero'>NÚMERO</label>
            <Input onChange={(e) => setNumero(e.target.value)} className='input-register' id='numero' type='text' />
          </div>
          <div className='div-register'>
            <label for='complemento'>COMPLEMENTO</label>
            <Input className='input-register' id='complemento' type='text' />
          </div>
          <div className='div-register'>
            <label for='bairro'>BAIRRO</label>
            <Input onChange={(e) => setBairro(e.target.value)} className='input-register' id='bairro' type='text' />
          </div>
          <div className='div-register'>
            <label for='cidade'>CIDADE</label>
            <Input onChange={(e) => setCidade(e.target.value)} className='input-register' id='cidade' type='text' />
          </div>
          <div className='div-register'>
            <label for='estado'>ESTADO</label>
            <Input onChange={(e) => setEstado(e.target.value)} className='input-register' id='estado' type='text' />
          </div>
          <div className='div-register'>
            <label for='cep'>CEP</label>
            <Input onChange={(e) => setCep(e.target.value)} className='input-register' id='cep' type='text' />
          </div>
          <div className='div-register'>
            <label for='email'>EMAIL</label>
            <Input onChange={(e) => setEmail(e.target.value)} className='input-register' id='email' type='email' />
          </div>
          <div className='div-register'>
            <label for='senha'>SENHA</label>
            <Input className='input-register' id='senha' type='password' />
          </div>
          <div className='div-btn-register'>
            <Button onClick={cadastrar} className='btn-register' children={'Cadastrar'} />
          </div>
        </div>

      </div>
      <div className='footer-info-page'>
        <Footer />
      </div>
    </div>
  )
}

export default Account;