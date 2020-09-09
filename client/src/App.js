import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*Páginas*/
import Home from './Pages/home';
import Account from './Pages/account';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='*'>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
