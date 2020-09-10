import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Button from '../../Components/Button/index';
import Input from '../../Components/Input/index';
import Logo from '../../img/logoValeTech.png';
import './account.css';
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';

const Account = () => {

  const cadastrar = () => {
    growl({ text: 'Cadastro efetuado com sucesso!', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <figure className='logo-form'>
          <img src={Logo} />
        </figure>
        <div className='text-info'>
          <p>Aqui você se cadastra para receber apoio financeiro das empresas parceiras.
          Se atente aos termos de uso e preencha os dados corretamente.</p>
        </div>

        <div className='form-register'>
          <div className='div-register'>
            <label for='name'>NOME</label>
            <Input className='input-register' id='name' type='text' />
          </div>
          <div className='div-register'>
            <label for='cnpj'>CNPJ</label>
            <Input className='input-register' id='cnpj' type='text' />
          </div>
          <div className='div-register'>
            <label for='data-fundacao'>DATA DE FUNDAÇÃO</label>
            <Input className='input-register' id='data-fundacao' type='text' />
          </div>
          <div className='div-register'>
            <label for='endereco'>ENDEREÇO</label>
            <Input className='input-register' id='endereco' type='text' />
          </div>
          <div className='div-register'>
            <label for='numero'>NÚMERO</label>
            <Input className='input-register' id='numero' type='text' />
          </div>
          <div className='div-register'>
            <label for='complemento'>COMPLEMENTO</label>
            <Input className='input-register' id='complemento' type='text' />
          </div>
          <div className='div-register'>
            <label for='bairro'>BAIRRO</label>
            <Input className='input-register' id='bairro' type='text' />
          </div>
          <div className='div-register'>
            <label for='cidade'>CIDADE</label>
            <Input className='input-register' id='cidade' type='text' />
          </div>
          <div className='div-register'>
            <label for='estado'>ESTADO</label>
            <Input className='input-register' id='estado' type='text' />
          </div>
          <div className='div-register'>
            <label for='cep'>CEP</label>
            <Input className='input-register' id='cep' type='text' />
          </div>
          <div className='div-register'>
            <label for='email'>EMAIL</label>
            <Input className='input-register' id='email' type='email' />
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