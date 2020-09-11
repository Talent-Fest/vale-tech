import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*Páginas*/
import Home from '../src/Pages/Home/home';
import Account from './Pages/Account/account';
import Transaction from './Pages/Transaction/transaction';
import Balance from './Pages/Balance';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='/transaction' component={Transaction} />
        <Route path='/balance' component={Balance} />
        <Route path='*'>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
