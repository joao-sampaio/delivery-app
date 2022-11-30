import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Cadastro } />
      <Route path="/customer/products" />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
